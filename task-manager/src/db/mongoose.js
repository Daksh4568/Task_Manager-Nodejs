 const mongoose = require('mongoose')


 const connectionURL = 'mongodb://127.0.0.1:27017/task-manager';


 // This is how we can use mongoose to create a model for our erp software
const connectDB = async ()=>{
    try {
        const connectionDB = await mongoose.connect(connectionURL);
        // console.log(`MongoDB connected: ${connectionDB.connection.host}`)
        // console.log("connected to database ")
    
     } catch (error) {
    //   console.log(error)
       
     }
}
connectDB()
 