const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");

const JWT_SECRET = "pranay";


app.use(bodyParser.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}) 


