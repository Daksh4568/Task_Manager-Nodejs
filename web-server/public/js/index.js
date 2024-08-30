console.log("Client side javascript file is loaded")
//fetch is not the part of javascript , its a browser api, it ca be used in any browser
// fetch does not work in backend , now this script will run on client side so we can use the fetch method 

//fetch is a asynchronus io
// in request we basically pass the function as the second argument so that when the data is fetched then the function should run
// but in case of fetch we use .then
// this basically means that fetch the data from this url and then run this function in the output 


console.log("Synchronus tasks are complete now time for the Asynchronus operations")

const weatherform = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'


weatherform.addEventListener('submit' , (e)=>{
    // prevend default will basically prevent the default behaviour of , which is in this case loading of page 
    e.preventDefault()

    const location = searchElement.value

    messageOne.textContent = 'Loading.....'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address= ${location}` ).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
               messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.forecast)
            }
        })
    })
}) 