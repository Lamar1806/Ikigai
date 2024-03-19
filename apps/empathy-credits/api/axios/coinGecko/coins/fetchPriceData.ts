import { AxiosResponse } from 'axios';
import axios_coin_gecko_free from '../../axios';

export interface PriceData {
  [key: string]: {
    [key: string]: number | null;
  };
}

export interface PriceQueryParams {
  ids: string;
  vs_currencies: string;
  include_market_cap?: boolean;
  include_24hr_vol?: boolean;
  include_24hr_change?: boolean;
  include_last_updated_at?: boolean;
  precision?: string;
}

export const fetchPriceData = async (
  queryParams: PriceQueryParams
): Promise<PriceData> => {
  try {
    const response: AxiosResponse<PriceData> = await axios_coin_gecko_free.get(
      'https://api.coingecko.com/api/v3/simple/price',
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch price data');
  }
};
