import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";

import { fetchForecast, WeatherForecast } from './services/api/weatherService';
import { GeocodingResponse, fetchCoordinates } from "./services/api/geocodingService";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const App: React.FC = () => {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  
  const handleSearch = async (address: string) => {

    try {
      const data: GeocodingResponse = await fetchCoordinates(address);
  
      if (data.result.addressMatches.length) {
        const { coordinates } = data.result.addressMatches[0];
        console.log("Latitude:", coordinates.y, "Longitude:", coordinates.x);
  
        const forecastData = await fetchForecast(coordinates.y, coordinates.x);
        setForecast(forecastData);
      } else {
        console.log("No matches found for this address.");
      }
  
    } catch (error) {
      console.error("Error fetching address coordinates:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchBar onSearch={handleSearch} />
      {forecast && <Forecast data={forecast} />}
    </ThemeProvider>
  );
};

export default App;
