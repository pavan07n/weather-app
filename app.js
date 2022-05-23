const request = require('postman-request')

//Storing URL of API - WEATHER API
// const url = 'http://api.weatherstack.com/current?access_key=caba2e11f84ef2145faacb35dfbe72e1&query=15.3995,75.0830'


// /*HTTP request*/ request({url: url, json: true}, (error, response) => {
//  if (error) {
//    console.log('Unable to connect to Weather Service! Check your Internet connection.')
//  } 
// else if (response.body.error) {
//     console.log('Unable to find location')
// }
// else {
//     console.log("Weather is " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees, but feels like " 
//     + response.body.current.feelslike + " degrees. ")
//  }
// })

//GeoCoding API
const geoUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Navanagar, Karnataka.json?access_token=pk.eyJ1IjoicGF2YW4tbiIsImEiOiJjbDNobHF4cDIwZ3FyM2JxeHVsMWlldHkyIn0.dMS4b9oodhByv62vUOL9LA&limit=1'

request({url: geoUrl, json: true}, (error, response) => {
if (error) {
        console.log('Unable to connect to Location Service! Check your Internet connection.')
    }
    else if(response.body.features.length === 0)  {
       console.log('No matching results. Unable to find location, try another search')
   }
   else {
    console.log("Latitude: " + response.body.features[0].center[1] + 
    " Longitude: " + response.body.features[0].center[0])
   }
})