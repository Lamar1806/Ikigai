import { AxiosResponse } from 'axios';
import axios_coin_gecko_free from './axios';

export type CoinMarketData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null;
  last_updated: string;
};

//prettier-ignore
export type CoinMarketQueryParams = {
  vs_currency: 'usd' | 'eur' | 'jpy' | string;
  ids?: string;
  category?: string;
  order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
  locale?: 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'lt' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sv' | 'th' | 'tr' | 'uk' | 'vi' | 'zh' | 'zh-tw';
  precision?: 'full' | number;
};

export interface APIResponse {
  status: string;
  data: CoinMarketData[];
}

export const fetchCoinMarketData = async (
  queryParams: CoinMarketQueryParams
): Promise<CoinMarketData[]> => {
  try {
    const response: AxiosResponse<APIResponse> =
      await axios_coin_gecko_free.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: queryParams, // Use the provided query parameters
        }
      );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch coin market data');
  }
};
