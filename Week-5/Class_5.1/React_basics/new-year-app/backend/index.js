

//write basic express boiler plate code

const express = require("express");
const { creatTodo, updateTodo } = require("./types");
const cors = require("cors")
// import { creatTodo, updateTodo } from "./types";
const todo = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const check = creatTodo.safeParse(createPayload);
    if (!check.success) {
        res.status(403).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created",
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const check = updateTodo.safeParse(updatePayload);
    if (!check.success) {
        res.status(403).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true,
    })

    res.json({
        msg: "todo marked as complete"
    })
})

app.listen(PORT, function() {
    console.log(`Server is listening on http://localhost:${PORT}`);
})