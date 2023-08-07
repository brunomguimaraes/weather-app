import React from 'react';

import { WeatherForecast } from '../../services/api/weatherService';

interface ForecastProps {
  data: WeatherForecast;
}

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const { properties } = data;
  const { periods } = properties;

  return (
    <div className="forecast-container">
      <div className="forecast-details">
        <h4>7-Day Forecast</h4>
        <ul>
          {periods.slice(0, 7).map(period => (
            <li key={period.number}>
              <h5>{period.name}</h5>
              <img src={period.icon} alt={period.shortForecast} />
              <p><strong>Temperature:</strong> {period.temperature} {period.temperatureUnit}</p>
              <p><strong>Wind:</strong> {period.windSpeed} from the {period.windDirection}</p>
              <p><strong>Forecast:</strong> {period.detailedForecast}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
