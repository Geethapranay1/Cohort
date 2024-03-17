const express = require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");
const { use } = require("./admin");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const check = await User.findOne({
        username: username,
    })
    if (check) {
        res.send("You already signed up in our page");
    }else {
        await User.create({
            username : username,
            password : password
        })
        res.json({
            msg : "user created succefully"
        })
    }
})

router.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const check = await User.findOne({
        username : username,
        password: password,
    })
    if (check) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token : token,
        })
    }else {
        res.status(403).json({
            msg : "please first sign up in here"
        })
    }
})

router.get("/courses", async (req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response,
    })
})

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.username;
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