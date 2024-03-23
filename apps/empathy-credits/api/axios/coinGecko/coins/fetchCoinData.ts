import axios, { AxiosResponse } from 'axios';

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
  queryParams?: CoinQueryParams
) => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      {
        params: queryParams,
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data for coin with ID ${coinId}`);
  }
};
