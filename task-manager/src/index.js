const express = require('express')
// we are requring the mongoose.js file so that we can connect to the database as we have written the code for the connection in mongoose file
require('./db/mongoose.js')


const userRouter = require('./router/user.route.js')
const taskRouter = require('./router/task.route.js')
const app = express()
const auth = require('../src/middlewares/auth.js')
const port = process.env.PORT || 3000
//app.use(express.json()) is a middleware function in Express.js that parses incoming JSON requests. It is used to handle requests where the client 
//sends JSON data in the body, typically in POST, PUT, or PATCH requests.

// app.use((req , res , next)=>{
//     // we call next to let express know that we are done with the middlware 
//     // we dont need to pass any arguments 
    
// we can set the middlewares as our need 
//        if(req.method === 'GET'){
//           res.send('GET requests are disabled for the particular the user')
//        } else {
//         next()
//        }
//     })
    
//     app.use((req , res , next)=>{
//         res.status(503).send('Site is currently down. Check back soon!')
// we will not use next in this middleware as we dont want to execute the req 
//     })

app.use(express.json())
app.use(userRouter) 
app.use(taskRouter)

//Without middleware: new request -> run route handler
//With middleware: new request -> pass through middleware -> run route handler


app.listen(port , ()=>{
    console.log('Server is running on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async()=>{
    // return value from the sign is the authentication token
    // sign function takes two arguments , which is object and a string
//object contains a unique identifier for the user , which can be the user unique id
//second argument is the secret random series of character
     const token = jwt.sign({id:'abfhhfa'} , 'thisismycode')
     console.log(token)
}

myFunction()
// const bcrypt = require('bcrypt')

// const myFunction = async()=>{
//     const password = 'Red456'
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log("User Password -",password)
//     console.log("Hashed password -",hashedPassword)

//     // comparing the password when the user is logging in 
//     const isMatch = await bcrypt.compare('Red456' , hashedPassword)
//     console.log(isMatch)
// }
// myFunction()

// the password when secured with hashing algorithm , it can be reversed and veryy strongly secured 
// while in comparison to the encryption method the password can be reversed to its original state if the key is compromised 
// Mainly hashing algorithm is preferred to store the password in the databse , also securing the password with hashing algorithm is also secured as it add a salts value(random value) to all the passwords which usually handles the case of the indentical password 

// Hashing is used for securely storing passwords in a way that they cannot be reversed, ensuring that even if a database is compromised, the original passwords cannot be retrieved.
// Encryption is used for securing data during transmission or storage in a reversible way, ensuring confidentiality but allowing retrieval of the original data when needed.
// For password storage, hashing with a strong algorithm and salting is the recommended approach.