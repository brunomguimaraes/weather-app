import { WeatherForecast } from "../../services/api/weatherService";

import * as Styled from "./index.styles";

interface ForecastProps {
  forecastData: WeatherForecast;
}

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  const { periods } = forecastData.properties;

  return (
    <Styled.Container>
      <Styled.ForecastDetails>
        <Styled.ForecastTitle>7-Day Forecast</Styled.ForecastTitle>
        <Styled.ForecastList>
          {Array.from({ length: 7 }).map((_, dayIndex) => {
            const morningForecast = periods[dayIndex * 2];
            const nightForecast = periods[dayIndex * 2 + 1];

            return (
              <Styled.ForecastItem key={morningForecast.number}>
                <Styled.TimeOfDayForecast>
                  <Styled.ForecastItemTitle>
                    {morningForecast.name}
                  </Styled.ForecastItemTitle>
                  <Styled.Image
                    src={morningForecast.icon}
                    alt={`${morningForecast.name} Morning`}
                  />
                  <Styled.ForecastText>
                    <strong>Temperature:</strong> {morningForecast.temperature}{" "}
                    {morningForecast.temperatureUnit}
                  </Styled.ForecastText>
                  <Styled.ForecastText>
                    <strong>Wind:</strong> {morningForecast.windSpeed} from the{" "}
                    {morningForecast.windDirection}
                  </Styled.ForecastText>
                  <Styled.ForecastText>
                    <strong>Forecast:</strong>{" "}
                    {morningForecast.detailedForecast}
                  </Styled.ForecastText>
                </Styled.TimeOfDayForecast>

                <Styled.TimeOfDayForecast>
                  <Styled.ForecastItemTitle>
                    {nightForecast.name}
                  </Styled.ForecastItemTitle>
                  <Styled.Image
                    src={nightForecast.icon}
                    alt={`${nightForecast.name} Night`}
                  />
                  <Styled.ForecastText>
                    <strong>Temperature:</strong> {nightForecast.temperature}{" "}
                    {nightForecast.temperatureUnit}
                  </Styled.ForecastText>
                  <Styled.ForecastText>
                    <strong>Wind:</strong> {nightForecast.windSpeed} from the{" "}
                    {nightForecast.windDirection}
                  </Styled.ForecastText>
                  <Styled.ForecastText>
                    <strong>Forecast:</strong> {nightForecast.detailedForecast}
                  </Styled.ForecastText>
                </Styled.TimeOfDayForecast>
              </Styled.ForecastItem>
            );
          })}
        </Styled.ForecastList>
      </Styled.ForecastDetails>
    </Styled.Container>
  );
};

export default Forecast;
