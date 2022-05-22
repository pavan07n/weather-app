const request = require('postman-request')

//Storing URL of API
const url = 'http://api.weatherstack.com/current?access_key=caba2e11f84ef2145faacb35dfbe72e1&query=15.3995,75.0830'


/*HTTP request*/ request({url: url, json: true}, (error, response) => {
 /*parsing the JSON data from web API const data = JSON.parse(response.body) */

 console.log("Weather is " + response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees, but feels like " 
 + response.body.current.feelslike + " degrees. ")
})

//GeoCoding
const geoUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Navanagar,karnataka.json?access_token=pk.eyJ1IjoicGF2YW4tbiIsImEiOiJjbDNobHF4cDIwZ3FyM2JxeHVsMWlldHkyIn0.dMS4b9oodhByv62vUOL9LA&limit=1'

request({url: geoUrl, json: true}, (error, response) => {
console.log("Latitude: " + response.body.features[0].center[1] + " Longitude: " + response.body.features[0].center[0])

})