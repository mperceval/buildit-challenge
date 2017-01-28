import getWeather from './api/weatherApi.js';
import { render } from './components/currentWeatherPanel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/weather-icons/css/weather-icons.min.css';
import '../css/styles.css';

const weatherPanel = document.querySelector('.weather-panel');


getWeather()
  .then((weather) => {
    weatherPanel.innerHTML = render(weather);

  })
  .catch((err) => {
    console.log('error : ', err);
  })
