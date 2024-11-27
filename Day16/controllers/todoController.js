const Todo = require('../models/todoMOdel');

const getAllToDos = async (req, res) => {
    try {
        const result = await Todo.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

const createToDo = async (req, res) => {
    try {
        const {title, description, } = req.body;
        const todo = new Todo({
            title,
            description
        })
        const result = await todo.save();
        res.status(201).json({
            message: "Success",
            result
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

const getTodosById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todo.findById(id);
        res.status(200).json({
            message: 'success',
            result
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body
        const result = await Todo.findByIdAndUpdate(
            id,
            {title, description},
            {new: true}
        )

        res.status(200).json({
            message: "Update Success",
            result
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}


const deleteToDo = async (req, res) => {
    try {
        const {id} = req.params
        const result = await Todo.findByIdAndDelete(id);
        if(!result) {
            console.log('To do not found');
            res.status(404).json({message: 'To do not found'});
            return
        }

        res.status(200).json({
            message: 'Deleted Successfully',
            result
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

module.exports = {
    getAllToDos,
    createToDo,
    getTodosById,
    updateTodo,
    deleteToDo
}