# buildit-challenge

This project displays the current weather for London - using the OpenWeatherMap 5 day forecast API call.  It is written in vanilla JS with ES6 (string templates / promises / modules / fat arrow functions).
It is packaged and deployed using Webpack.

## Installation:

1.	Clone repo.
2.  Navigate to buildit-challenge folder.
3.	Run `npm install`

## Usage - Run
1.	Run `npm run start -s`
2.	Browse to `localhost:8080`

This will build, lint, test and run the code.

## Usage - Test
1.	Run `npm run test`

## Hosted URL

http://buildit-challenge.esy.es

## Improvements:

UI - Displaying errors.
UI - Make responsive.
UI - Better style.
UI - Better use of icons - dependent on day/night/conditions.
UI - Add provision to select city - API supports this.
UI - Extra weather conditions - only currently supporting - clear, rain, cloud, snow.
UI - Display forecast.  API currently returning 5 day forecast but only showing current day.  Also currently only returning single data point per day.  There's loads more information available - 3 hourly updates - currently not being used.

Testing - More API tests required for failure conditions.
Testing - No UI tests currently.

Build - Needs a proper production build process.
