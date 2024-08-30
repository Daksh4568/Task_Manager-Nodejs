// json is basically the string representation of an object @ array

const fs = require('fs')
// const book = {
//     title:"Ego is the enemy",
//     author:"Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// but through this we cant access the bookjson.title because the data is in json format not the object
// console.log(bookJSON)


// json.parse takes the data in the json format and then parse it into object or array
// We have converted the data in json format and then have passed it in the json.parse
// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// the data will be stored in json format so thats why we have saved the name as json , 
// other than the file name we have to mention the data that we want in our file , so we are passing bookjson because we have parsed it
// fs.writeFileSync('1-json.json' , bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')// we are reading the file and get the binary data
// const dataJSON = dataBuffer.toString() // now we have converted the json binary data into javascript string
// const data = JSON.parse(dataJSON)// now we have converted the string into the object
// console.log(data.title) //now  we can access the data as we have convered it into the object 



// Now we have to change the data given in the json file and for that , 
// we have to read the data from the json file , convert it into js string and then parse it into json object so that we can update the data
// and after that we changed the data and then again convert it into stringify 
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Daksh Pratap Singh'
user.age = 23

const userJSON = JSON.stringify(user) // we have to pass the user in the arguement to get it convert 
fs.writeFileSync('1-json.json' , userJSON)







