import axios_coin_gecko_free from './axios';

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  platforms: { [key: string]: string };
}

export interface CoinListQueryParams {
  include_platform?: boolean;
}

export const getCoinList = async ({
  include_platform = true,
}: CoinListQueryParams = {}): Promise<Coin[]> => {
  try {
    const response = await axios_coin_gecko_free.get<Coin[]>(
      'https://api.coingecko.com/api/v3/coins/list',
      {
        params: {
          include_platform,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching coin list:', error);
    throw error; // You can handle the error as per your requirement
  }
};
