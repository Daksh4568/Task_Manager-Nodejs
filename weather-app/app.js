// // we can use both request and postman request


// const request = require('request')
//  const req = require('postman-request')
 const geocode = require('./utils/geocode')
 const forecast = require('./utils/forecast')

//  console.log(process.argv) are related to how Node.js handles command-line arguments. Here’s a detailed explanation:

// process.argv
// process.argv is an array containing the command-line arguments passed when the Node.js process was launched.
// The first element (process.argv[0]) is the path to the Node.js executable.
// The second element (process.argv[1]) is the path to the JavaScript file being executed.
// The subsequent elements (process.argv[2] and onwards) are the actual command-line arguments provided by the user.

const address = process.argv[2]

// If the user doesnt provide the address then if condition will execute 
if(!address){
    console.log("Please provide an address")
}
else{
      // we have used destructuring here 
    //   geocode(address, (error, data)=>{} , we have directly called latitude and longitude instead of accessing it from data
    geocode(address, (error, {latitude , longitude } = {}) => {
        if (error) {
            return console.log('Error:', error);
        } 

        // the output of the geocode will act as an input for the forecast function
        // forecast(data.latitude, data.longitude, (error, forecastData) => {}
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log('Error:', error);
            } 
            console.log(`The latitude is  ${latitude} and the longitude is ${longitude}`)
            console.log(forecastData);
            
            
        });
    });
}


// console.log(process.argv)



// Usage


