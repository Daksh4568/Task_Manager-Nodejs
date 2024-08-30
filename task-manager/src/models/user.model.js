
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')


// import { Schema, model } from 'mongoose'
// import { isEmail } from 'validator'
// import { hash } from 'bcrypt'


const userSchema = new mongoose.Schema({
    name :{
        type : String ,
// we can set a field required so that it will be compulsory for user tp enter that data otherwise there will be error
        required : true , 
        trim : true 

    },
    email:{
        type: String,
        unique: true,
        required : true ,
        validate(value){
           if(!validator.isEmail(value)){
            throw new Error('Invalid Email')
           }
        },
        trim : true ,
        lowercase: true
    },
    password:{
       type: String,
       required: true,
       minlength:7,
       trim:true,
       validate(value){
        if(value.toLowerCase().includes('password')){
            throw new Error('Password cannot contain word "password"')
        }
       }
    },
    age:{
        type: Number ,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("Age must be a positive integer")
        }
    }  
    }
})
userSchema.statics.findByCredentials = async(email , password) =>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }
// argument contains plain text password and the password we are comparing it from
    const isMatch = await bcrypt.compare(password , user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}
//Hash the plain text password before saving 
// there are two middlware methode that we can use , which are pre and post 
// pre is basically to perform the operation before saving or before the validatiom
// post is basically to do something just after the eventor user get saved 
// purpose of this to run this code before the user is saved 
// purpose of using next is to just indicate that our task is complete and now we can move further 
// if we dont call next the the code will hang forever thinking that we are still running some code 
userSchema.pre('save' , async function(next){
      const user = this;

      
     if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password , 8)
     }

   next()

})
const User = mongoose.model('User' , userSchema )
module.exports = User;