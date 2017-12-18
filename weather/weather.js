const request = require('request');


var getWeather = (lat, long, callback) => {
    request({
    url:`https://api.darksky.net/forecast/abc4ec6d45dd5b29ec9faf0f6625c5f4/${lat},${long}`,
    json: true}, 
       (error, response, body) => {
            if(!error && response.statusCode === 200){
                callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
                    
                });
            }else{
                callback('undefined');
            }
        });
}

module.exports.getWeather = getWeather;
