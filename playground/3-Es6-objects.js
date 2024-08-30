// object property shorthand 

const userName = 'Daksh';
const userAge = 24

const user = {
    name:userName,
    age:userAge,
    location:"Chandigarh , India"

}

// object destructuring
// This is how we can access the properties of object with the help of object destructuring
// Its an easy and efficient way to access the property of ojects
const productsForcar = {
    lights:"Ambient lights have to be integrated",
    wheels:"Alloy wheels have to be integrated",
    price:17000000 , 
    engine:"900 torque with 2600 cc engine"
}

// if i want to change the name of the object property then we can do that too with the help of object destructuring 
// we can also define a new property in the object here  
 const {lights:LedLights, wheels,price , engine , color = "Black"} = productsForcar
// so here we have also added a property of color which was not in the object that we declare before
 console.log(LedLights)
 console.log(engine)
 console.log(color)
console.log(user) 

const company = {
    label:"Red Notebook",
    price:1000,
    stock:40000,
    salePrice:undefined,
    rating:4.3
}
// we have also set an default value which will get in the console when the user doesnt provide any output or we didnt pass anything in the paramter

const transaction = (type , {label , price , stock= 0}={})=>{
    console.log(type , label , stock , price)
    // console.log(price)
    // console.log(stock)
}
transaction('order' , company)