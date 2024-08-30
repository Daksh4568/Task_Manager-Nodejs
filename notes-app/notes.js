const fs = require('fs')



const addNote = function(title , body){
     // first we have to load in all the existing notes stored as json and then we are gonna parse them 
     const notes = loadNotes();
     // this will basically check if the title of the new note is being same from the previous notes
     // the duplicate note will be stored in the duplicatenotes array 
    //  const duplicateNotes = notes.filter(function(note){
    //         return note.title === title
    //  })
     
     const duplicateNote = notes.find((note)=>{
        note.title === title
     })
    
     debugger
     // if there are no duplicatenotes then the if statement will run otherwise else 

     if(!duplicateNote){ // or we can write (duplicateNotes===undefined)
        notes.push({
            title: title,
            body: body
         })
         saveNotes(notes)
         console.log("New note added! ")
     } else{
        console.log('Note title taken!')
     }
     

}
const removeNotes = function(title){
      const notes = loadNotes();
       
       const notesToKeep = notes.filter(function(note){
            return note.title !== title
       })
// we can check if the node is removed by checking the length of both the array
    if(notes.length > notesToKeep.length){
        console.log("Successfully Removed")
        saveNotes(notesToKeep)
    }
    else{
        console.log("Couldnt find the note")
    }
     
}
const listNotes = () =>{

    // to basically load all the notes
    const notes = loadNotes()
    console.log('Your Notes')
// thisfunction will print the title of all the notes
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title)=>{
    const notes = loadNotes()
    
    // we are finding the note which user requested to read 
    const note = notes.find((note)=> note.title === title)
    if(note){
     console.log(note.title)
     console.log(note.body)
    }
    else{
     console.log("No note found ! Sorry")
    }
}


const saveNotes = function(notes){
    // we are gonna stringify the data and then save it 
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}


// it doesnt take any arguements , it just return an array of notes
// this function is only gonna work if there is a file that contains the data in json 
const loadNotes = function(){
// we are gonna wrap this in try and catch so that if there exist no file then we can handle the error
 try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
 }
 // if any of the above line throw some error then we are gonna handle the error with catch
 catch(e){
    return[]
 }

    
}

// we can export multiple function by writing it in object format 
// now these both functions will be used by app.js

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes, 
    listNotes: listNotes , 
    readNote: readNote
}