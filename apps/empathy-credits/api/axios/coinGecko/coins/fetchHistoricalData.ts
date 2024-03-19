import axios, { AxiosResponse } from 'axios';

export interface HistoricalData {
  prices: [number, number][]; // [timestamp, price]
  market_caps: [number, number][]; // [timestamp, market cap]
  total_volumes: [number, number][]; // [timestamp, 24hr volume]
}

export interface HistoricalDataQueryParams {
  id: string;
  date: string; // dd-mm-yyyy format
  localization?: boolean;
}

export const fetchHistoricalData = async (
  queryParams: HistoricalDataQueryParams
): Promise<HistoricalData> => {
  try {
    const response: AxiosResponse<HistoricalData> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${queryParams.id}/history`,
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch historical data');
  }
};
