const Registration = require('../../models/login/registration');
const bcrypt = require('bcryptjs');

exports.registration = (req, res, next) => {
  console.log('Registration controller');
  console.log(req.body);
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const name = req.body.name;
  const userName = req.body.userName;
  const password = req.body.password;

  Registration.findOne({email: email})
    .then((user) => {
      if (user) {
        res.send('User Already Exist');
      } else {
        // Bcryptjs lib is used for password encryption, hash will do the password encoding and
        // '12' will tell the level of encryption. 12 is the highest level of encryption
        return bcrypt.hash(password, 12).then((hashedPassword) => {
          const registration = new Registration({
            phoneNumber: phoneNumber,
            email: email,
            name: name,
            userName: userName,
            password: hashedPassword,
          });
          registration.save().then((result) => {
            console.log(result);
            if (result) {
              res.send('User has Signed up successfully');
            } else {
              res.send(
                'There is some problem with network it seems or with db'
              );
            }
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSignup = (req, res, next) => {
  console.log('User is already exist');
};
