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

1.  UI - Displaying errors.
2.  UI - Make responsive.
3.  UI - Better style.
4.  UI - Better use of icons - dependent on day/night/conditions.
5.  UI - Add provision to select city - API supports this.
6.  UI - Extra weather conditions - only currently supporting - clear, rain, cloud, snow.
7.  UI - Display forecast.  API currently returning 5 day forecast but only showing current day.  Also currently only returning single data point per day.  There's loads more information available - 3 hourly updates - currently not being used.
8.  Testing - More API tests required for failure conditions.
9.  Testing - No UI tests currently.
10. Build - Needs a proper production build process.
