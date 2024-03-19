import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  CoinMarketData,
  CoinMarketQueryParams,
  fetchCoinMarketData,
} from '../../../axios/coinGecko/coins/fetchCoinMarketData';

export const useCoinMarketData = (
  queryParams: CoinMarketQueryParams
): {
  data: CoinMarketData[];
  loading: boolean;
  error: any;
} => {
  const {
    data,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['coinMarketData', queryParams],
    queryFn: () => fetchCoinMarketData(queryParams),
    enabled: false, // Disable automatic query execution
  });

  useEffect(() => {
    // Manually trigger query execution on mount and whenever queryParams change
    refetch();
  }, [queryParams, refetch]);

  return { data: data ?? [], loading, error };
};
