const express = require("express");
const app = express();
const port = 3009;

const z = require("zod");

const schema = z.array(z.number());

const schema1 = z.object({
    email : z.string(),
    password : z.string(),
    country : z.literal("IN").or(z.literal("US")),
    kidneys : z.array(z.number())
})

app.use(express.json());

app.post("/", function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(403).json({
            msg : "input is invalid",
        })
    }else {
        res.send({
            response
        })
    }
    

})

app.listen(port, function() {
    console.log(`Example the website is http://localhost:${port}`);
})