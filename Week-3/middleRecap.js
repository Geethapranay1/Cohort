const express = require("express");
const port = 3009;
const app = express();


function isOldEnought(age) {
    if (age >= 14) {
        return true;
    }else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }else {
        res.status(403).send("You are not allowed");
    }
}
app.get("/ride1", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "you have successfully rode ride1",
    })
})

app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "you have successfully rode ride2",
    })
})



app.listen(port, function() {
    console.log(`Server is running on http://localhost:${port}`);
})