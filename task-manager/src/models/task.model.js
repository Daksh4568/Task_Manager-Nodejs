const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true

    },
    completed:{
        type:Boolean ,
        default : false
    }
})
// const task = new Task({
//     description: 'Go to gym',
//     completed : false
// })
    
module.exports = Task