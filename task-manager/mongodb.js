const mongodb = require('mongodb'); // Import the MongoDB library
const MongoClient = mongodb.MongoClient; // Get the MongoClient class from the MongoDB library
const OnjectID = mongodb.ObjectId
// or we can write this as 
// const {MongoClient , ObjectId} = require('mongodb')
// Connection URL for MongoDB server
const connectionURL = 'mongodb://127.0.0.1:27017'; // Use '127.0.0.1' (localhost) and port 27017 (default MongoDB port)

// Database name to connect to
const databaseName = 'task-manager'; // Name of the database you want to work with

const id = new  OnjectID()
console.log(id)
// console.log(id.getTimestamp())
// Async function to connect to the database
async function connectToDatabase() {
  try {
    // Connect to MongoDB using the connection URL
    const client = await MongoClient.connect(connectionURL);
    console.log("Connected Securely!"); // Log a message indicating successful connection

    // Access the specific database
    const db = client.db(databaseName);

    // Perform a simple operation to ensure the connection is functional
    // Insert a document into the 'tasks' collection
    // const result = await db.collection('tasks').insertOne({
    //   name: "Lakshya Pratap Singh", 
    //   age: 22
    // });
    const result = await db.collection('taskstodo').insertMany([
      {
        description: "Buy groceries",
        completed: false
      },
      {
        description: "Finish project",
        completed: true
      },
      {
        description: "Learn MongoDB",
        completed: true
      }
    ])
    // console.log(result.insertedIds); // Log the result of the insert operation

    // Close the connection when done
    // client.close(); // Close the MongoDB connection to free up resources
  } catch (error) {
    // Handle any errors that occur during the connection or operation
    console.error("Unable to connect to the database", error);
  }
}

// Call the function to connect to the database and perform operations
connectToDatabase();