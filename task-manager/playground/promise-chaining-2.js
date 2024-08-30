require('../src/db/mongoose.js')
const Task = require('../src/models/task.model.js')
//66c084089fed0b0e7c2ea78e

// Task.findByIdAndDelete('66b9f38e45f011227f4e8211').then((task)=>{
//     console.log(task)

//     return Task.countDocuments({ completed : false}).then((result)=>{
//         console.log(result)
//     }).catch((e)=>{
//         console.log(e)
//     })
// })

const deleteTaskandCount = async (id)=>{
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false})
    return count
}

deleteTaskandCount('66b9f4a2a877f211acf551d2').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})