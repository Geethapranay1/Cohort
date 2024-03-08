const express = require("express");
const app = express();
const port = 8080;

let requests = 0;
function noOfRequests(req, res, next) {
    requests++;
    next();
}

app.get("/", noOfRequests, function(req, res) {
    res.json({
        theRequests : requests,
        msg : "you can see your requests",
    })
})


app.use(function(err, req, res, next) {
    res.json({
        msg : "sorry something is bad with our servers"
    })
})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
  })