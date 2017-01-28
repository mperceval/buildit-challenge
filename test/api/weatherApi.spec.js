import { expect } from 'chai';
import sinon from 'sinon';

import getWeather from '../../js/api/weatherApi.js';
import response from '../fakeData/getWeatherResponse';


describe('weatherApi', () => {
  describe('getWeather', () => {
    // Configure fake server with appropriate api call and results
    const server = sinon.fakeServer.create();
    server.respondWith(
      'GET',
      'http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=52a1bf84230d94a0ea4cfc1f30af936e&units=Imperial',
      [ 200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(response)
      ]);

    // Call getWeather and store result for use in tests
    let actualResult = null;
    getWeather().then((data) => {
      actualResult = data;
    });
    server.respond();

    it('should return object with the correct shape and entries for default city - London', () => {
      const expectedResult = {
        entries: [
          { condition: 'Clear', description: 'clear sky', temp: 27.32 },
          { condition: 'Rain', description: 'light rain', temp: 44.86 },
          { condition: 'Rain', description: 'light rain', temp: 37.2 },
          { condition: 'Rain', description: 'light rain', temp: 49.04 },
          { condition: 'Rain', description: 'light rain', temp: 51.25 }
        ],
        location: 'London',
        unit: 'Imperial'
      };
      expect(expectedResult).to.be.eql(actualResult);
    });
    // Tidy up
    server.restore();
  });
});
