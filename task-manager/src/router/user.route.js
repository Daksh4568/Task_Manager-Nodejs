const express = require('express')
const User = require('../models/user.model')

const router = new express.Router()

//this is the get handler which will fetch all the users
//app.get() is used to define a route handler for HTTP GET requests. These requests are typically used to retrieve data from a server or database.
router.get('/users' , async (req , res)=>{
    // we can use User.find({}) to find particular users on the basis of argument that we provide , it accepts object in the argument
         try{
          const users = await User.find({})
          res.send(users)
         } catch(e){
            res.status(500).send(e)
         }
    })
    // async always return promise , it doesnt return any value , so we have to handle the response like that
    router.post('/users' , async (req , res)=>{ 
        const user = new User(req.body)
        try{
            await user.save()
            res.status(201).send(user)
    
        }
      // the below code will only run when the promise is fulfilled and thats why we are wrapping the code into try and catch    
        catch(e){
       res.status(400).send(e)
        }
       
      
        
    })
    router.post('/users/login' , async(req,res)=>{
         try{
         const user = await User.findByCredentials(req.body.email , req.body.password)
         res.send(user)
        //  res.send("You are logged in")
        console.log("You are logged in")
         }catch(e){
       res.status()
           res.status(404).send(e)
           console.log("Unable to sign in")
           //console.log(e) , there was an error in the mongoose shcema 
         }
    })
    
    // we are creating a get handler which can fetch the user based on the id 
    router.get('/users/:id' , async (req,res)=>{
        const id = req.params.id
        
        try{
            const user = await User.findById(id)
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }catch(e){
            res.status(500).send(e)
        }
    })
    // first argument is the path and second is the callback function 
    //POST: Send data to create a new resource (e.g., add a new user).
    //Here we have created the endpoints to create the resources. 
    
    // update users by id
    // patch is patch is a methode in express which is used to handle HTTP Patch req . 
    // A patch req is typically used to partially update a resource on the server , unlike a put req which typically replaces a entire resource, 
    // Patch allows to modify a specific part of the resource
    
    router.patch('/users/:id',async (req , res)=>{
        const id = req.params.id
        const updates = Object.keys(req.body)
        const allowedUpdates = ['name' ,'email' , 'passowrd' , 'age']
        
        const isValidOperation = updates.every((update)=>{
            return allowedUpdates.includes(update)
        })
    
        if(!isValidOperation){
            return res.status(400).send({error:'Invalid updates!'})
        }
        try{
//             req.body: This object contains the data sent by the client in the request to update the user's details. For example, it might look like this: { "name": "John", "age": 30 }.
// Object.keys(req.body): This extracts the keys (i.e., the fields that need to be updated) from the request body. In the example above, updates would be an array: ['name', 'age'].
    // we can send id and then the object of what we want to update in the arguments of findByIdandUpdate
            // const user = await User.findByIdAndUpdate(id , req.body , {new: true , runValidators:true})
//updates contains the array of strings and update is the individual update and also we are getting a string in update like name email password , which user is trying to update 
// we are using brackets with user because we dont know that what the user is going to update , so thats why we are using [] which is dynamic
const user = await User.findById(req.params.id)            
updates.forEach((update)=>{
                user[update] = req.body[update]
            })
//////////////steps explaining//////////////////////////////
            // updates.forEach(...): This loop iterates over each field in the updates array.
            // user[update] = req.body[update]:
            // user[update]: Accesses the property on the user object that corresponds to the current update field.
            // req.body[update]: Retrieves the new value for that field from the request body.
            // The assignment updates the user's field with the new value provided in the request.
                       
            await user.save()
               if(!user){
                return res.status(404).send()
               }
               res.send(user) 
             
        }catch(e){
            res.status(400).send(e)
        }
    })
    
    // delete user 
    router.delete('/users/:id' , async(req , res)=>{
        const id = req.params.id
        try{
          const user = await User.findByIdAndDelete(id)
    
          if(!user){
            return res.status(404).send()
          }
          res.send(user)
        } catch(e){
            res.status(500).send()
        }
    
    })
module.exports = router 