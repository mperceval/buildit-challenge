const icons = {
  rain: 'wi-rain',
  snow: 'wi-snow',
  clear: 'wi-day-sunny',
  clouds: 'wi-cloudy'
}

export function getWeatherIcon(condition) {
  const key = condition.toLowerCase();
  return icons[key] !== undefined ? icons[key] : 'wi-na';
}

export function getUnitIcon(unit) {
  const lcUnit = unit.toLowerCase();
  if (lcUnit === 'metric') {
    return 'wi-celsius';
  } else if (lcUnit === 'imperial') {
    return 'wi-fahrenheit';
  } else {
    return 'wi-na';
  }
}
