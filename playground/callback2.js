// callback

//  const doWorkCallback = (callback)=>{
//     setTimeout(()=>{
//         callback("This is my error msg!" , undefined);
//     } , 2000)
//  }

//  doWorkCallback((error , result)=>{
//         if(error){
//             return console.log(error)
//         }
//         else{
//             console.log(result)
//         }
//  })


// Promises 
const doWorkPromise = new Promise((resolve , reject)=>{
     setTimeout(()=>{
    //  resolve([1, 5, , 67, 8])
     reject("Things went wrong ! ")
     },2000)
})

doWorkPromise.then((result)=>{
     console.log("Success" , result)
}).catch((error)=>{
    console.log("Error" , error)
})

 // As we can see that the promise is more optimised way to do a asynchronus task S