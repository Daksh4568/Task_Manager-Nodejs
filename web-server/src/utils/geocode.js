const request = require('request')

// const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Ange0es&access_token=pk.eyJ1IjoiZGFrc2g0NTY4IiwiYSI6ImNsempndjBuazBuengybXF4bWNyY2oxMnYifQ.C9cugJDm-SFcz5YIxTGrAA&limit=1'
// // the function is always called with two parameters 
// request({url:geocodeURL , json:true} , (error , response)=>{

//     if(error){
//       console.log('Unable to connect to location services')
//     }else if(response.body.features === 0){
//           console.log("Unable to find locations . Try another search")
//     }else{
//         const feature = response.body.features[0];
//         const latitude = feature.geometry.coordinates[1];
//         const longitude = feature.geometry.coordinates[0];
//         console.log(latitude , longitude)
//     }
    
    
// })


const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoiZGFrc2g0NTY4IiwiYSI6ImNsempndjBuazBuengybXF4bWNyY2oxMnYifQ.C9cugJDm-SFcz5YIxTGrAA&limit=1';

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (!response.body.features || response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            const feature = response.body.features[0];
            const latitude = feature.geometry.coordinates[1];
            const longitude = feature.geometry.coordinates[0];
            callback(undefined, { latitude, longitude });
        }
    });
};


module.exports = geocode