import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";
import ErrorHandler from "./components/ErrorHandler";
import NoMatches from "./components/NoMatches";
import Loading from "./components/Loading";

import { fetchForecast, WeatherForecast } from './services/api/weatherService';
import { GeocodingResponse, fetchCoordinates } from "./services/api/geocodingService";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

const App: React.FC = () => {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [noMatches, setNoMatches] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (address: string) => {
    setError(null);
    setNoMatches(false);
    setLoading(true);

    try {
      const data: GeocodingResponse = await fetchCoordinates(address);
  
      if (data.result.addressMatches.length) {
        const { coordinates } = data.result.addressMatches[0];
        const forecastData = await fetchForecast(coordinates.y, coordinates.x);
        setForecast(forecastData);
      } else {
        setNoMatches(true);
        setForecast(null);
      }
    } catch (error) {
      setError("Error fetching address coordinates. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <ErrorHandler message={error} />}
      {noMatches && <NoMatches />}
      {forecast && <Forecast forecastData={forecast} />}
    </ThemeProvider>
  );
};

export default App;
