const request = require('request')



// const url = 'http://api.weatherstack.com/current?access_key=cc52c7cd764d369165051ad96dd0392a&query=37.8267,-122.4233&unit=m'


// // in the req we have to provide the two parameters , which include url and an callback function which can be an arrow function
// // we can add multiple properties, in the same way we have addded url andd json
// // in the arrow function we have to mention error and response
// request({url:url , json:true} , (error , response)=>{
//     // const data = JSON.parse(response.body)
//     //     console.log(data.current)
//     if(error){
//         console.log('Unable to fetch weather data')
//     }else if(response.body.error){
//         console.log("Unable to find the location")
//     }
//     else{
//         console.log(' It is currently ' + response.body.current.temperature+ ' degrees out . It feels like ' + response.body.current.feelslike + ' degrees out there .')

//     }
// })



// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=cc52c7cd764d369165051ad96dd0392a&query=' + latitude + ',' + longitude + '&units=m';

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service', undefined);
//         } else if (response.body.error) {
//             console.log('Error response from API:', response.body.error);
//             callback('Unable to find location', undefined);
//         } else if (!response.body.current) {
//             console.log('Unexpected response body structure:', response.body);
//             callback('Unexpected response structure from weather service', undefined);
//         } else {
//             callback(undefined, 'It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out there.');
//         }
//     });
// };


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=cc52c7cd764d369165051ad96dd0392a&query=${latitude},${longitude}&units=m`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (response.body.error) {
            console.log('Error response from API:', response.body.error);
            callback('Unable to find location. Error: ' + response.body.error.info, undefined);
        } else if (!response.body.current) {
            console.log('Unexpected response body structure:', response.body);
            callback('Unexpected response structure from weather service', undefined);
        } else {
            const current = response.body.current;
            callback(undefined, `It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out there.`);
        }
    });
};



module.exports = forecast;




