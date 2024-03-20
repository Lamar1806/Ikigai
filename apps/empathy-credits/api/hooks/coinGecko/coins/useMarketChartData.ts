import { useQuery } from '@tanstack/react-query';
import {
  MarketChartData,
  MarketChartQueryParams,
  fetchMarketChartData,
} from '../../../axios/coinGecko/coins/fetchMarketChartData';
import { useEffect } from 'react';

export const useMarketChartData = (
  queryParams: MarketChartQueryParams
): [MarketChartData | null, boolean, string | null] => {
  const {
    data = null,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['marketChartDataForCoin', queryParams], // Unique key for the query
    queryFn: () => fetchMarketChartData(queryParams), // Function to fetch data
    enabled: false, // Query is enabled by default
  });

  useEffect(() => {
    // Manually trigger query execution on mount and whenever queryParams change
    refetch();
  }, [queryParams, refetch]);

  return { data: data || null, isLoading, error: error?.message || null };
};
