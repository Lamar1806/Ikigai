import axios, { AxiosResponse } from 'axios';

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  localization?: boolean;
  tickers?: boolean;
  market_data?: boolean;
  community_data?: boolean;
  developer_data?: boolean;
  sparkline?: boolean;
  description?: string;
}

export interface CoinQueryParams {
  id: string;
  localization?: boolean;
  tickers?: boolean;
  market_data?: boolean;
  community_data?: boolean;
  developer_data?: boolean;
  sparkline?: boolean;
}

export const fetchCoinData = async (
  coinId: string,
  queryParams: CoinQueryParams
): Promise<CoinData> => {
  try {
    const response: AxiosResponse<CoinData> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data for coin with ID ${coinId}`);
  }
};
