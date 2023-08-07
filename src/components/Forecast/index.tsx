import React, { useEffect, useState } from 'react';

const Forecast: React.FC<{ lat: string; lon: string }> = ({ lat, lon }) => {
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const endpoint = `https://api.weather.gov/points/${lat},${lon}/forecast`;
      const response = await fetch(endpoint);
      const data = await response.json();
      setForecast(data.properties.periods);
    };

    fetchWeather();
  }, [lat, lon]);

  return (
    <div>
      {forecast ? forecast.map((day: any) => (
        <div key={day.number}>
          <h3>{day.name}</h3>
          <p>{day.detailedForecast}</p>
        </div>
      )) : <p>Loading...</p>}
    </div>
  );
}

export default Forecast;
