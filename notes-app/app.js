// Node modules basically contains all the code for the dependencies that we have installed 

 const validator = require('validator') 
 const yargs = require('yargs')
 const getnotes = require('./notes')
const notes = require('./notes')


 // customize yargs version

//  yargs.version('1.1.0')


// add , remove , read , list 
yargs.command({
    command:'add' , 
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
// with the demand option we can set that the person have to mandatory put the title and the type method will only allow us to enter in string format
            demandOption:true ,
            type:'string'
        } ,
        body:{
            describe:'Note body',
            demandOption:true ,
            type:'string'

        },
    }, 
    handler: function(argv){
        notes.addNote(argv.title , argv.body)
        
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
       title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
       }
    },
    handler: function(argv){
// we are just passing the title of the note to the removeNotes function so that it can be successfully removed
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title: {
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title , argv.body)
    }
})

// this will not work 
// yargs.command({
//     command:'List' , 
//     describe:'List all notes',
//     handler: function(){
//         notes.listNotes(argv.title)
//     }
// })
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// if we remove the console log than the yargs will not parse, so for that we can use yargs.parse() instead of console.log(argsv)
// console.log(yargs.argv)
yargs.parse()
