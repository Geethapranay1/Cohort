const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";
const port = 3006;
const app = express();

mongoose.connect(
    'mongodb+srv://geethapranayofficial:A7lox4fBUVaEpFxW@cluster0.2ns0wr6.mongodb.net/user_app'
  );

const User = mongoose.model('Users', {
    name : String,
    email : String,
    password : String
})




app.use(express.json());

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email : username});
    if (existingUser) {
        return res.status(400).send("username already exists");
    }

    const user = new User({
        name : name,
        email : username,
        password : password
    });
    user.save();

    res.json({
        msg : "user created successfully"
    })
})
// app.post("/signin", function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;
    
//     if(!userExists(username, password)) {
//         return res.status(403).json({
//             msg : "user doesn't exist in our mango db",
//         });
//     }

//     var token = jwt.sign({username : username}, jwtPassword);
//     return res.json({
//         token,
//     });
// });

// app.get("/users", function(req, res) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         const otherUsers = ALL_USERS.filter((user) => user.username !== username);

//         res.status(200).json({
//             otherUsers
//         })

//     }catch (error) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// })

app.listen(port, function() {
    console.log(`server is running on http://localhost:${port}`);
})