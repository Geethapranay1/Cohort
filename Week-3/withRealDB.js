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
app.post("/signin", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    const checkingUser = await User.findOne({email : username});
    if (checkingUser) {
        var token = jwt.sign({email : username}, jwtPassword);
        return res.json({
            token,
        });
    }else {
        return res.status(404).send("user doesn't exist please first sign up");
    }

   
});

app.get("/users", async function(req, res) {
    const token = req.headers.authorization;
    try {
		const decoded = jwt.verify(token, jwtPassword);
		const username = decoded.email;
		// return a list of users other than this username from the database
		let people = [];
		const data = await User.find({ email: username });
		if (data) {
			const allUsers = await User.find({});
			for (let i = 0; i < allUsers.length; i++) {
				if (allUsers[i].email !== data[0].email) {
					people.push(allUsers[i]);
				}
			}
			res.status(200).json(people);
		}
	} catch (err) {
		return res.status(403).json({
			msg: "Invalid token",
		});
	}
})

app.listen(port, function() {
    console.log(`server is running on http://localhost:${port}`);
})