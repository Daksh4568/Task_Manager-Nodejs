const fs = require('fs')

// rm is used to remove directory
// recursive can be added in this to remove the directory which may contain any file

fs.rm("./copy" , {recursive: true} , function(err){
    if(err){
        console.log("Error")
    }
    else{
        console.log("Removed")
    }
})

// learn to read and create a folder with the help of fs 
