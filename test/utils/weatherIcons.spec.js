import { expect } from 'chai';
import { getWeatherIcon, getUnitIcon } from '../../js/utils/weatherIcons';

describe('WeatherIcons.js - Utils', () => {
  describe('getWeatherIcon', () => {
    it('should return rain icon for lowercase rain condition', () => {
      const expectedResult = 'wi-rain';
      expect(getWeatherIcon('rain')).to.equal(expectedResult);
    });

    it('should return rain icon for non-lowercase rain condition', () => {
      const expectedResult = 'wi-rain';
      expect(getWeatherIcon('Rain')).to.equal(expectedResult);
    });

    it('should return na icon for unknown condition', () => {
      const expectedResult = 'wi-na';
      expect(getWeatherIcon('nonsense')).to.equal(expectedResult);
    });
  });

  describe('getUnitIcon', () => {
    it('should return F icon for Imperial unit', () => {
      const expectedResult = 'wi-fahrenheit';
      expect(getUnitIcon('Imperial')).to.equal(expectedResult);
    });

    it('should return C icon for Metric unit', () => {
      const expectedResult = 'wi-celsius';
      expect(getUnitIcon('Metric')).to.equal(expectedResult);
    });

    it('should return na icon for unknown unit', () => {
      const expectedResult = 'wi-na';
      expect(getUnitIcon('nonsense')).to.equal(expectedResult);
    });
  });
});
