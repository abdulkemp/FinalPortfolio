// require('dotenv').config();
// const {sign, verify} = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// function createToken(user) {
//     return sign({
//         emailAdd : user.emailAdd,
//         password: user.password
//     },
//     process.env.SECRET_KEY,
//     {
//         expiresIn: '1h'
//     });
// }

// function verifyAToken(req, res, next) {
//     try{
//         const token = req.cookies['UserFoundInDatabase'] !== null ? req.cookies['UserFoundInDatabase'] : 
//         'Please Register';
//         const isValid = null;
//         if(token !== 'Please Resgister') {
//             isValid = verify(token, process.env.SECRET_KEY);
//             if(isValid) {
//                 req.authenticated = true;
//                 next();
//             } else {
//                 res.status(400).json({err: 'Please Register'})
//             }
//         } else{
//             res.status(400).json({err: 'Please Register'})
//         }
//     } catch(e) {
//         res.status(400).json({err: e.message});
//     }
// }

// module.exports = {createToken, verifyAToken};