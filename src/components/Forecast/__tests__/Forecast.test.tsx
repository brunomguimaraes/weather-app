import React from 'react';
import { render } from '@testing-library/react';
import Forecast from '..';

describe('<Forecast />', () => {
  const mockForecastData = {
    properties: {
      periods: [
        {
          number: 1,
          name: "Day 1",
          icon: "https://sample-icon-1.com",
          temperature: 20,
          temperatureUnit: "C",
          windSpeed: "10 mph",
          windDirection: "N",
          detailedForecast: "Sunny with a slight chance of rain."
        },
      ]
    }
  };

  it('matches snapshot', () => {
    const { asFragment } = render(<Forecast forecastData={mockForecastData as any} />); // Casting as `any` for simplicity
    expect(asFragment()).toMatchSnapshot();
  });
});
