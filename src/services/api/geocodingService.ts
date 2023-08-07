const GEOCODING_ENDPOINT = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export interface GeocodingResponse {
  result: {
    input: {
      address: {
        address: string;
      };
      benchmark: {
        isDefault: boolean;
        benchmarkDescription: string;
        id: string;
        benchmarkName: string;
      };
    };
    addressMatches: {
      tigerLine: {
        side: string;
        tigerLineId: string;
      };
      coordinates: {
        x: number;
        y: number;
      };
      addressComponents: {
        zip: string;
        streetName: string;
        preType: string;
        city: string;
        preDirection: string;
        suffixDirection: string;
        fromAddress: string;
        state: string;
        suffixType: string;
        toAddress: string;
        suffixQualifier: string;
        preQualifier: string;
      };
      matchedAddress: string;
    }[];
  };
}

export const fetchCoordinates = async (address: string): Promise<GeocodingResponse> => {
  const formattedAddress = encodeURIComponent(address);
  const url = `${PROXY_URL}${GEOCODING_ENDPOINT}?address=${formattedAddress}&benchmark=2020&format=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching coordinates");
    }

    const data = await response.json() as GeocodingResponse;
    return data;

  } catch (error) {
    throw new Error("Error fetching coordinates");
  }
};
