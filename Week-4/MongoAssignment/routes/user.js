const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password,
    })

    res.json({
        msg: "user created successfully",
    })
})

router.get("/courses", async (req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response,
    })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;
    await User.updateOne({
        username : username,
    }, {
        "$push" : {
            purchasedCourses : courseId,
        }
    })

    res.json({
        msg : "purchase complete!!"
    })
})

router.get("/purchasedcourse", userMiddleware, async (req, res) => {
    const user =  await User.findOne({
        username : req.headers.username,
    })

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses,
        }
    })

    res.json({
        courses : courses,
    })
})

module.exports = router;