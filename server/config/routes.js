const tasksController = require('../controllers/tasksController');

module.exports = function (app) {
    app.get('/tasks', tasksController.getAllTasks);

    app.get('/tasks/:id', tasksController.getTask);

    app.post('/tasks', tasksController.createTask);

    app.put('/tasks/:id', tasksController.updateTask);

    app.delete('/tasks/:id', tasksController.deleteTask);
}