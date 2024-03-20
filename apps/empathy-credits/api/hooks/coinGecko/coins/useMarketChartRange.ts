import { useQuery } from '@tanstack/react-query';
import {
  MarketChartData,
  MarketChartRangeQueryParams,
  fetchMarketChartRange,
} from '../../../axios/coinGecko/coins/fetchMarketChartRange';

interface UseMarketChartRangeProps {
  queryParams: MarketChartRangeQueryParams;
}

export const useMarketChartRange = ({
  queryParams,
}: UseMarketChartRangeProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['marketChartRange', queryParams], // Unique key for the query
    queryFn: () => fetchMarketChartRange(queryParams), // Fetch function
    // Options object
    enabled: !!queryParams, // Only fetch data if queryParams exist
  });

  return { loading: isLoading, error, data: data };
};
