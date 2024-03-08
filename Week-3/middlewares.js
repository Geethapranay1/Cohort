const express = require("express");
const app = express();


//ugly so we will use middlewares


// const usernameValidater = (username, password) => {
//     if(!(username === "admin" && password === "pass")){
//         return false;
//     } 
//     return true;
// }

// const kidneyValidator = (kidneysId) => {
//     if(kidneysId != 1 && kidneysId != 2) {
//         return false;
//     }  
//     return true;
// }

//middlewares
app.use(express.json());
function userMiddleware(req, res, next) {
    const username = req.header.username;
    const password = req.header.password;
    if (username != "admin" || password != "pass") {
        res.status(403).json({
            msg : "Incorrect inputs",
        });

    }else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneysId = req.query.kidneysId;
    if (kidneysId != 1 || kidneysId != 2) {
        res.status(403).json({
            msg : "Incorrect inputs",
        });
    } else {
        next();
    }
}

app.get("/", userMiddleware, kidneyMiddleware, function(req, res) {

    // if (!usernameValidater(username, password)){
    //     res.status(404).json({"msg" : "something wrong with your input"});
    // }
    // if (!kidneyValidator(kidneysId)) {
    //     res.status(404).json({"msg" : "something wrong with your input"});
    // }
   
      
    
    res.json({
        msg : "Your kidney is fine",
    })
    
 })

app.listen(8000);