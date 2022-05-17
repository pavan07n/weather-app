const request = require('postman-request')

//Storing URL of API
const url = 'http://api.weatherstack.com/current?access_key=caba2e11f84ef2145faacb35dfbe72e1&query=15.3995,75.0830'


/*HTTP request*/ request({url: url}, (error, response) => {
 /*parsing the JSON data from web API*/ const data = JSON.parse(response.body)
 console.log(data.current)

})