// suppose if user doesnt provide any input then we can also provide the defalult paramter which will run instead of getting undefined 


const greeter = (name  = 'user', age)=>{
      console.log('Hello ' + name)
}

greeter('Daksh')

greeter()