const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://geethapranayofficial:A7lox4fBUVaEpFxW@cluster0.2ns0wr6.mongodb.net/course_selling_app");

const adminSchema = new mongoose.Schema({
    //schema defination here
    username : String,
    password : String

})

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
    }]
})


const courseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number,
})

const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model("Course", courseSchema);

module.exports = {
    Admin,
    User,
    Course
}