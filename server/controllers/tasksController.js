const mongoose = require('mongoose');
const TaskModel = mongoose.model('TaskDocument');

module.exports = {
    getAllTasks(req, res) {
    // TaskModel.remove({}, ()=> console.log('empty')); //remove all Data from Collection
    TaskModel.find()
        .then(data => res.json(data))
    },

    getTask(req, res) {
        TaskModel.find({_id: req.params.id})
            .then(data => res.json(data))
    },

    createTask(req, res) {
        const task = new TaskModel();
        task.title = req.body.title,
        task.description = req.body.description,
        task.save()
            .then(res.redirect('/tasks'));
    },

    updateTask(req, res) {
        TaskModel.updateOne({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description}}, {runValidators: true})
            .then(res.redirect('/tasks'));
    },

    deleteTask(req, res) {
        TaskModel.deleteOne({_id: req.params.id})
            .then(res.redirect('/tasks'));
    }
};