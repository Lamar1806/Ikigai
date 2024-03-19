import axios, { AxiosResponse } from 'axios';

// Define the structure of the coin market data
export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
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
  sparkline_in_7d: {
    price: number[];
  } | null;
}

// Define the structure of the response from the API
interface APIResponse {
  status: number;
  data: CoinMarketData[];
}

// Define the query parameters for the request
export interface CoinMarketQueryParams {
  vs_currency: 'usd' | 'eur' | 'jpy' | string;
  ids?: string;
  category?: string;
  order?:
    | 'market_cap_asc'
    | 'market_cap_desc'
    | 'volume_asc'
    | 'volume_desc'
    | 'id_asc'
    | 'id_desc';
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
  locale?:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-tw';
  precision?: 'full' | string;
}

// Function to fetch coin market data from the CoinGecko API
export const fetchCoinMarketData = async (
  queryParams: CoinMarketQueryParams
): Promise<CoinMarketData[]> => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets';

  try {
    // Make a GET request to the API
    const response: APIResponse = await axios.get(url, {
      params: queryParams,
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors
    throw new Error('Failed to fetch coin market data');
  }
};
