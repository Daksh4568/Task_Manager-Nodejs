// var data = await fetch(`https://randomuser.me/api/`)
// var res = data.json()
// console.log(res)
// The main purpose of this is understand that we can also use await without using the async function 

// So the code which runs line by line is synchronus
// And the code which is async in nature , it is basically moved to the side stack 
// and the remaining sync code is completed and the main stack is empty. And then after all the sync code is complete then check if the async code is completed or not . 
// and then if its completed then move it to the main stack 

// fetch is asynchronus in nature . Its basically a non blocking code 

async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`)
    // we also have to use await when asking for the res as the data may not be fetched and then we will not be able to convert it into json

    var res = await blob.json()
    console.log(res);
    console.log(res.results[0].name)
}

abcd()
 