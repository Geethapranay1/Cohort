const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
require("dotenv").config();
const JWT_SECRET = "pranay";

const port = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}) 


