const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const port = 3005;

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
      },
      {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
      },
      {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
      },

]

function userExists(username, password) {
    return ALL_USERS.find((item) => item.username === username && item.password === password); 
}

app.use(express.json());
app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    if(!userExists(username, password)) {
        return res.status(403).json({
            msg : "user doesn't exist in our mango db",
        });
    }

    var token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const otherUsers = ALL_USERS.filter((user) => user.username !== username);

        res.status(200).json({
            otherUsers
        })

    }catch (error) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
})

app.listen(port, function() {
    console.log(`server is running on http://localhost:${port}`);
})