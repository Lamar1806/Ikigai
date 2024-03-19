import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  TickerData,
  TickerQueryParams,
} from '../../axios/coinGecko/coins/fetchTickers';

export const useTickerData = (queryParams: TickerQueryParams) => {
  const [tickerData, setTickerData] = useState<TickerData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        const response: AxiosResponse<TickerData[]> = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${queryParams.id}/tickers`,
          {
            params: queryParams,
          }
        );
        setTickerData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch tickers data');
        setLoading(false);
      }
    };

    fetchTickers();

    // Clean up function to abort fetch on unmount
    return () => {
      // Abort ongoing requests or perform any cleanup if needed
    };
  }, [queryParams]);

  return { tickerData, loading, error };
};
