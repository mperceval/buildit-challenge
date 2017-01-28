import {getWeatherIcon, getUnitIcon } from '../utils/weatherIcons';

export function render(weatherData = null) {

  if (!weatherData) {
    return '<div>No Weather Data Available.</div>';
  }

  const { location, unit } = weatherData;
  const { condition, description, temp } = weatherData.entries[0];
  const formattedDescription = description.replace(/\b\w/g, l => l.toUpperCase());
  return (
    `<div class="row">
      <div class="col-xs-12 main-location">The Current Weather In ${location} - ${formattedDescription}</div>
    </div>
    <div class="row vertical-align">
      <div class="col-xs-12 main-panel">
        <div class="col-xs-6 condition"><i class="wi ${getWeatherIcon(condition)}"></i></div>
        <div class="col-xs-6 temp">${Math.round(temp)}<i class="wi unit ${getUnitIcon(unit)}"></i></div>
      </div>
    </div>`
  );
}
