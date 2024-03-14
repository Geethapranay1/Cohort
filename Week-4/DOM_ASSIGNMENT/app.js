
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/interest", (req, res) => {
    const p = parseInt(req.query.p);
    const t = parseInt(req.query.t);
    const r = parseInt(req.query.r);
    const interest  = (p * t * r) / 100;
    const total = p + interest;
    res.send({
        total : total,
        interest : interest,
    })
})

app.listen(3001, function() {
    console.log("Server is running on http://localhost:3001/interest");
})
