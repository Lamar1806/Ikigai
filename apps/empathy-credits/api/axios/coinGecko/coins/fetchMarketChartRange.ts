import axios, { AxiosResponse } from 'axios';

export interface MarketChartData {
  prices: [number, number][]; // [timestamp, price]
  market_caps: [number, number][]; // [timestamp, market cap]
  total_volumes: [number, number][]; // [timestamp, 24h volume]
}

export interface MarketChartRangeQueryParams {
  id: string;
  vs_currency: string;
  from: string;
  to: string;
  precision?: string;
}

export const fetchMarketChartRange = async (
  queryParams: MarketChartRangeQueryParams
): Promise<MarketChartData> => {
  try {
    const response: AxiosResponse<MarketChartData> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${queryParams.id}/market_chart/range`,
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch market chart range data');
  }
};
