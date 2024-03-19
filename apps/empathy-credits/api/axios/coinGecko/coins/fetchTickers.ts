import axios, { AxiosResponse } from 'axios';

export interface TickerData {
  id: string;
  name: string;
  symbol: string;
  last: number;
  volume: number;
  converted_last: { [key: string]: number };
  converted_volume: { [key: string]: number };
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
}

export interface TickerQueryParams {
  id: string;
  exchange_ids?: string;
  include_exchange_logo?: boolean;
  page?: number;
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc';
  depth?: boolean;
}

export const fetchTickers = async (
  queryParams: TickerQueryParams
): Promise<TickerData[]> => {
  try {
    const response: AxiosResponse<TickerData[]> = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${queryParams.id}/tickers`,
      {
        params: queryParams,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tickers data');
  }
};
