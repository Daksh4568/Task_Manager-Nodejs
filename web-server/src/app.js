const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { title } = require('process')

// console.log(__dirname)
// console.log(path.join(__dirname ,'../public'))
const app = express()
//Define paths for express config

// public folder contains the html static file 
const publicDirectorypath = path.join(__dirname ,'../public')
// we have to update the viewspath if we want to change its default name , we can also change the location of it 
const viewsPath = path.join(__dirname , '../templates/views')
const partialsPath = path.join(__dirname , '../templates/partials')
//app.use is way through which we can customize the server
// static takes the path to the folder that we want to serve up 
// It is used to configure Handlebars (hbs) as the templating engine for rendering dynamic views
// setup handlebars engine and views location

app.set('view engine', 'hbs')
app.set('views' , viewsPath)
// we can also change the name of the views folder 
// setup static directory to serve
app.use(express.static(publicDirectorypath))
hbs.registerPartials(partialsPath)

// .get basically take two parameters where 
// this basically lets us configure that what we should we do when someone tries to get the resource at the specific url
//first parameter is route and it also takes a function which will basically decide what to do when someone visits the url 



// app.get('/help' , (req , res)=>{
//     // we can pass array , array of objects or objects too if we want to
//     res.send([{
//         name : 'Daksh Pratap Singj',
//         age:24
//     },{
//         name:"Lakshya Pratap Singh",
//         age:22
//     },{
//         name:"Saurabh Singh",
//         age:45
//     }])
// })

app.get('',(req,res)=>{
    // the first argument is name of the view to render and we can also pass the second argument
    // second argument is an object which our view can access 
    res.render('index' , {
        title:"Weather ",
        name:"Daksh Pratap Singh"
    })
})

app.get('/about',(req,res)=>{
    res.render('about' , {
        title:"About Page",
        name:"Daksh Pratap Singh"
    })
})

app.get('/help',(req,res)=>{
    res.render('help' , {
        helpText:"I am here to help you",
        title:"Help Page",
        name:"Daksh Pratap Singh"
    })
})

// an http endpoint
app.get('/weather' , (req,res)=>{
   // we should also do error handling for weather

   if(!req.query.address){
    return res.send({
        error:'You must provide an address'
    })
   }
   //geocode takes two argument where second argument is the callback funtion
  // the code will still work even if the data is not provided , as we have set an empty object as a default parameter
    geocode(req.query.address , (error , {latitude , longitude} ={})=>{
               
        if(error){
            return res.semd({error})
        }
        forecast(latitude , longitude , (error , forecastData)=>{
               if(error){
                return res.send({error})
               }
            res.send({
                forecast:forecastData,
                address:req.query.search
            })
        })
    })
  
})

app.get('/prodcuts' , (req,res)=>{
    if(!req.query.search){
//if someone doesnt provide any search query than the if statement will return this error
// so we need to add a condition to check if the query is empty or not

        return res.send({
            error:"You must provide a search term"
        })
    }
// we also have used return in error so that after getting an error the function just return the error and does not continue the code execution ,
// because we cant send two response , it will cause error  
    console.log(req.query.search)
    res.send({
        products:[]
    })

})

// we can do this too in case if we want user to navigate to the right page 
// its a catch for help404
app.get('/help/*' , (req,res)=>{
   res.render('404' , {
    title:'404',
    name:"Daksh Pratap Singh",
    errorMessage:"Help article not found"
   })
})
//* this is used to basically provide the route for the page that we dont have 
// 404 page has to be used in the last because app.get comes from uppercommand to check what the user is looking for , so to handle the 404 page case we write it in the last
// its a catch for any 404
 app.get('*' , (req,res)=>{
    //   res.send('Page not found')
    res.render('404', {
        title:'404',
        name:"Daksh Pratap Singh",
        errorMessage:"Page not found"
    })
 })
// 
app.listen(3000 , ()=>{
    console.log("Now the server is started correctly on the port")
})
