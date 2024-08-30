require('../src/db/mongoose.js')

const User = require('../src/models/user.js')

// 66c5918ae9394491fc88f6c4

// User.findByIdAndUpdate('66c5918ae9394491fc88f6c4' ,  {age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndDelete(id , { age})
    const count = await User.countDocuments({age })

    return count
}

updateAgeAndCount('66c58f8270161b9ae8bdf659' , 23).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})