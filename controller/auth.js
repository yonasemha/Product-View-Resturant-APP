// const User = require("../../models/authUserModel");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const jwt = require("jsonwebtoken");

// exports.authUserFromDataBase = (req, res, next) => {
//   const { email, password } = req.body;

//   //validation simple
//   if (!email || !password) {
//     return res.status(400).json({ msg: "Please enter all fields" });
//   }

//   //check for existing user
//   User.findOne({ email: email }).then((user) => {
//     if (!user) return res.status(400).json({ massage: "user doesn't exist" });
//     //validate password
//     bcrypt.compare(password, user.password).then((isMatch) => {
//       if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

//       jwt.sign(
//         { id: user.id },
//         config.get("jwtSecret"),
//         { expiresIn: 3600 },
//         (err, token) => {
//           if (err) throw err;
//           res.json({
//             token,
//             expiresIn: 3600,
//             user: {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//             },
//           });
//         }
//       );
//     });
//   });
// };






