const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.listen(3000,() => {
    console.log(`server is running on http://localhost:3000`);
});