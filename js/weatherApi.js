function createWeatherEntry(entry) {
  const { main: condition, description } = entry.weather[0];
  const { temp } = entry.main;
  return {
    condition,
    description,
    temp
  };
}

function transformDailyWeatherEntries(entries) {
  return entries.map((entry) => {
    return createWeatherEntry(entry);
  });
}

function getDailyWeatherEntries(entries) {
  return entries.filter((entry, idx) => {
    if (idx % 8 === 0) {
      return entry;
    }
  });
}

function transformWeatherData(data, unit) {
  const dailyEntries = getDailyWeatherEntries(data.list);
  const transformedDailyEntries = transformDailyWeatherEntries(dailyEntries);
  const location = data.city.name;
  return {
    location,
    entries: transformedDailyEntries,
    unit
  }
}

/*
 * Makes call to OpenWeatherMap to get 5 day forecast for given city.
 * Input : City code
 * Returns : Promise
 */
 export default function getWeather(cityCode='2643743', unit='Imperial') {
   const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&APPID=52a1bf84230d94a0ea4cfc1f30af936e&units=${unit}`;

   // Return new promise
   return new Promise((resolve, reject) => {
     // Make XHR request
     const req = new XMLHttpRequest();
     req.open('GET', url);

     req.onload = () => {
       // This is called even on 404 so check the status
       if (req.status === 200) {
         const responseJSONData = JSON.parse(req.response);
         const weather = transformWeatherData(responseJSONData, unit);
         resolve(weather);
       } else {
         // Otherwise reject
         reject(Error(req.statusText));
       }
     };

     req.onError = () => {
       console.log('onError');
       reject(Error('Network Error'));
     };

     // Make the request
     req.send();
   });
 };
