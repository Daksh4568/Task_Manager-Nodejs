const add = (a , b)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        } , 2000) 
    })
}

// add(1,7).then((sum)=>{
//   console.log(sum)

//   add(sum , 3).then((sum2)=>{
//     console.log(sum2)
//   }).catch((e)=>{
//     console.log(e)})
// }).catch((e)=>{
//     console.log(e)
// })

// PROMISE Chaining 


add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,9)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log("Error", e)
})