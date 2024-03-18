import { useEffect, useState } from 'react';
import {
  CoinMarketData,
  CoinMarketQueryParams,
  fetchCoinMarketData,
} from '../axios/fetchCoinMarketData';

const useCoinMarketData = (
  queryParams: CoinMarketQueryParams
): {
  data: CoinMarketData[];
  loading: boolean;
  error: any;
} => {
  const [data, setData] = useState<CoinMarketData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coinData = await fetchCoinMarketData(queryParams);
        setData(coinData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryParams]);

  return { data, loading, error };
};

export default useCoinMarketData;
