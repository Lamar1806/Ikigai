import axios, { AxiosResponse } from 'axios';

export interface OHLCData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface OHLCQueryParams {
  id: string;
  vs_currency: string;
  days: number;
  precision?: string;
}

export const fetchOHLCData = async (
  queryParams: OHLCQueryParams
): Promise<OHLCData[]> => {
  try {
    const response: AxiosResponse<OHLCData[]> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${queryParams.id}/ohlc`,
      {
        params: {
          vs_currency: queryParams.vs_currency,
          days: queryParams.days,
          precision: queryParams.precision,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch OHLC data');
  }
};
