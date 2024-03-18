import { useState, useEffect } from 'react';
import {
  CoinData,
  CoinQueryParams,
  fetchCoinData,
} from '../axios/fetchCoinData';

const useCoinData = (
  coinId: string,
  queryParams: CoinQueryParams
): [CoinData | null, boolean, string | null] => {
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCoinData(coinId, queryParams);
        setCoinData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [coinId, queryParams]);

  return [coinData, isLoading, error];
};

export default useCoinData;
