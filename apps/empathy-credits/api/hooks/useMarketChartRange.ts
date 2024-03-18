import { useState, useEffect } from 'react';
import {
  MarketChartData,
  MarketChartRangeQueryParams,
  fetchMarketChartRange,
} from '../axios/fetchMarketChartRange';

interface UseMarketChartRangeProps {
  queryParams: MarketChartRangeQueryParams;
}

const useMarketChartRange = ({ queryParams }: UseMarketChartRangeProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<MarketChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const marketChartData = await fetchMarketChartRange(queryParams);
        setData(marketChartData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch market chart range data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Optionally, perform any cleanup here
    };
  }, [queryParams]);

  return { loading, error, data };
};

export default useMarketChartRange;
