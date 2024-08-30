setTimeout(()=>{
    console.log('Two seconds are up')
} , 2000)

const names = ['Daksh' , 'Lakshya' , 'Jess']

const shortNames = names.filter((name)=>{
    return name.length <=4
})

const geocode = (address , callback)=>{
        setTimeout(()=>{
            const data = {
                latitude: 0,
                longitude : 8
            }
            callback(data)
        },2000)
}

geocode('Aligarh' , (address,data)=>{
     console.log(address,data)
})

const add = (a,b,callback) =>{
    setTimeout(()=>{
        callback(a+b)
    } , 2000)
}

add(1 , 4 , (sum)=>{
    console.log(sum)
})