import { AxiosResponse } from 'axios';
import axios_coin_gecko_free from './axios';

const pingCoinGecko = () => {
  return axios_coin_gecko_free
    .get('/ping', {
      headers: {
        accept: 'application/json',
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const coinsList = () => {
  return axios_coin_gecko_free
    .get('/coins/list?include_platform=true', {
      headers: {
        accept: 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

type CoinMarketData = {
  // Define interface for CoinMarketData
};

//prettier-ignore
type CoinMarketQueryParams = {
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

interface APIResponse {
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

export const coinGeckoRequest = {
  pingCoinGecko,
  coinsList,
  fetchCoinMarketData,
};
