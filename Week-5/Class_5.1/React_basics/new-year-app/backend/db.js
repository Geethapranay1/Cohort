const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://geethapranayofficial:A7lox4fBUVaEpFxW@cluster0.2ns0wr6.mongodb.net/new-year-app");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;