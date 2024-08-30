const fs = require('fs')
// require will basically load in the fs module in the fs variable 
// fs.writeFile(file,data[,options] ,callbacks) syntax for create a file using fs

fs.writeFile("Daksh.txt","We are creating a server file" , function(err){
        if(err){
            console.log("We got an error")
        }else{
            console.log(" Done with creating the file")
        }
})

// this is how we can create a file with the help of fs module

// In the same way we can use append to just add a text into our existing file with the same syntax

fs.appendFile("Daksh.txt" , " with the help of nodejs" , function(err){
      if(err){
        console.log("The data in the file is not added")
      }else{
        console.log("Succesfully done")
      }
})
// fs rename can be used to just rename the file 

fs.rename("Daksh.txt" , "Coder.txt" , function(err){
    if(err){
        console.log("Unable to change the name")
    }
    else{
        console.log("Succesfully updated the name")
    }
})
// We can also create a copy of the txt file in a new folder 
 // fs.copyfile("src" ,"new adrs/new name" , function )
fs.copyFile("Coder.txt" , "./NodeJs/copy.txt" , function(err){
    if(err){
        console.log("unable to copy the file")
    }
    else{
        console.log("Succesfully copied the file")
    }
})

// fs.unlink can be used to delete the file

// fs.unlink("Coder.txt" , function(err){
//     if(err){
//         console.log("Error")
//     }
//     else{
//         console.log("Removed")
//     }
// })

