const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ //!!Schema in Mongoose is a structure for each Document
    title: {type: String},
    description: {type: String}
}, {timestamps: true }); //.....................adds "createdAt" and "updatedAt" properties to TaskDocument(s)

// create an object to that contains methods for mongoose to interface with MongoDB
const TaskModel = mongoose.model('TaskDocument', TaskSchema); //!!Model in Mongoose is a structure for each Collection