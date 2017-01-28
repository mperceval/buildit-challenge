import getWeather from './api/weatherApi.js';

console.log('begin');
getWeather()
  .then((weather) => {
    console.log(weather);
  })
  .catch((err) => {
    console.log('error : ', err);
  })
