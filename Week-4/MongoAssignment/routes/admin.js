const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();


// router.use(express.json());
router.post("/signup", async (req, res) => {
    //implementing admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        msg : "admin created succefully"
    })

})

router.post("/courses", adminMiddleware, async (req, res) => {
    //implementing updating courses logic for admin


    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    //in the real world using zod is powerful

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        msg: "course created succefully",
        courseId : newCourse._id
    })
})

router.get("/courses", adminMiddleware, async (req, res) =>{
    //implementing fetching all courses logic

    const response = await Course.find({});
    res.json({
        courses: response,
    })



})


module.exports = router;