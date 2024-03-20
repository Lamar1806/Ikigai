import axios, { AxiosResponse } from 'axios';

export interface MarketChartData {
  prices: [number, number][]; // [timestamp, price]
  market_caps: [number, number][]; // [timestamp, market cap]
  total_volumes: [number, number][]; // [timestamp, 24h volume]
}

export interface MarketChartQueryParams {
  id: string; // Coin ID
  vs_currency: string; // The target currency of market data (usd, eur, jpy, etc.)
  days?: number; // Data up to number of days ago (1/2/3.../90/91/92.../365/366...)
}

export const fetchMarketChartData = async (
  queryParams: MarketChartQueryParams
): Promise<MarketChartData> => {
  try {
    const response: AxiosResponse<MarketChartData> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${queryParams.id}/market_chart`,
      {
        params: {
          vs_currency: queryParams.vs_currency,
          days: queryParams.days,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching market chart data:', error);
    throw new Error('Failed to fetch market chart data');
  }
};
