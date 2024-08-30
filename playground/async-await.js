const add = (a , b)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(a < 0 || b < 0){
               return reject('Invalid input')
            }
            resolve(a+b)
        } , 2000) 
    })
}

// using async await is more eay in comparison to promises 


const doWork = async ()=>{
    // it basically returns the promise fulfilled 
    // throw new Error("Something went wrong")
    // return 'Daksh'

    const sum = await add(1 ,100)
    const sum2 = await add(45 , 43)
    const sum3 = await add(sum , -3)
    return sum3
}

doWork().then((result)=>{
    console.log('result : ' , result)
}).catch((e)=>{
    console.log('e', e)
})




