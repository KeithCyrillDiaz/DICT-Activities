
const express = require('express');
const { getAllToDos, createToDo, getTodosById, updateTodo, deleteToDo } = require('../controllers/todoController');
const router = express.Router();


router.get('/get', getAllToDos);
router.get('/get/:id', getTodosById);
router.post('/create', createToDo);
router.put('/udpate/:id', updateTodo);
router.delete('/delete/:id', deleteToDo);


module.exports = router;
