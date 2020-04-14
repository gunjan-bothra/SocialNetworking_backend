// const User = require('../../models/login/registration');
// const bcrypt = require('bcryptjs');

// exports.postSignin = (req, res, next) => {
//     let email = req.email;
//     let password = req.password;
//     User.findOne({email: email})
//         .then(user => {
//             if (!user) {
//                 res.send("User doesn't exist");
//             } else {
//                 bcrypt.compare(password, user.password)
//                 .then((doMatch) => {
//                     if (doMatch) {
//                         req.session.isLoggedIn = true;
//                         req.session.user = user;
//                         // req.session.save(err => {

//                         // })
//                         res.send("User Logged in sucessfully")

//                     } else {    
//                         res.send('Entered password is incorrect');
//                     }
//                 })
//             }
//         }).catch(err => {

//         });
// };


const User = require('../../models/login/registration');
const bcrypt = require('bcryptjs');

exports.postSignin = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email: email})
        .then(user => {
            if (!user) {
                res.send("User doesn't exist");
            } else {
                return bcrypt.compare(password, user.password)
                .then((doMatch) => {
                    if (doMatch) {
                        // req.session.isLoggedIn = true;
                        // req.session.user = user;
                        // req.session.save(err => {

                        // })
                        res.send("User Logged in sucessfully")

                    } else {    
                        res.send('Entered password is incorrect');
                    }
                })
            }
        }).catch(err => {

        });
};

