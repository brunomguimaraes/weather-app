export interface WeatherForecast {
  "@context": (string | Context)[];
  type: string;
  geometry: Geometry;
  properties: ForecastProperties;
}

interface Context {
  "@version": string;
  "wx": string;
  "geo": string;
  "unit": string;
  "@vocab": string;
}

interface Geometry {
  type: string;
  coordinates: number[][][];
}

interface ForecastProperties {
  updated: string;
  units: string;
  forecastGenerator: string;
  generatedAt: string;
  updateTime: string;
  validTimes: string;
  elevation: Elevation;
  periods: Period[];
}

interface Elevation {
  unitCode: string;
  value: number;
}

interface Period {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  probabilityOfPrecipitation?: ProbabilityOfPrecipitation;
  dewpoint: Dewpoint;
  relativeHumidity: RelativeHumidity;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

interface ProbabilityOfPrecipitation {
  unitCode: string;
  value: number | null;
}

interface Dewpoint {
  unitCode: string;
  value: number;
}

interface RelativeHumidity {
  unitCode: string;
  value: number;
}

const BASE_URL = 'https://api.weather.gov';

const headers = new Headers({
  'User-Agent': '(anyweatherapp.com, contact@anyweatherapp.com)',
  'Accept': 'application/geo+json'
});

const fetchDetailedForecast = async (forecastLink: string): Promise<any> => {
  try {
    const response = await fetch(forecastLink, { headers });

    if (!response.ok) {
      throw new Error('Failed to fetch detailed forecast data.');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching detailed forecast:', error);
    throw error;
  }
};

export const fetchForecast = async (latitude: number, longitude: number): Promise<WeatherForecast> => {
  const endpoint = `${BASE_URL}/points/${latitude},${longitude}`;

  try {
    const initialResponse = await fetch(endpoint, { headers });

    if (!initialResponse.ok) {
      throw new Error('Failed to fetch initial forecast data.');
    }

    const initialData: any = await initialResponse.json();

    const detailedForecast = await fetchDetailedForecast(initialData.properties.forecast);

    return detailedForecast;

  } catch (error) {
    console.error('Error in fetchForecast:', error);
    throw error;
  }
};

