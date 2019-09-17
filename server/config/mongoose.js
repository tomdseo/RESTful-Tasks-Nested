const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/task_api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function (file) {
    if (file.indexOf('.js') > -1) {
        require(modelsPath + '/' + file);
    }
});