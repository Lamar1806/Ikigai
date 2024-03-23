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
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['marketChartDataForCoin', queryParams], // Unique key for the query
    queryFn: () => fetchMarketChartData(queryParams), // Function to fetch data
  });

  return { data: data || null, isLoading, error: error?.message || null };
};
