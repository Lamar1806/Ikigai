import { useState, useEffect } from 'react';
import {
  MarketChartData,
  MarketChartQueryParams,
  fetchMarketChartData,
} from '../../../axios/coinGecko/coins/fetchMarketChartData';

const useMarketChartData = (
  queryParams: MarketChartQueryParams
): [MarketChartData | null, boolean, string | null] => {
  const [data, setData] = useState<MarketChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const marketChartData = await fetchMarketChartData(queryParams);
        setData(marketChartData);
        setError(null);
      } catch (error) {
        setError('Failed to fetch market chart data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup code here if necessary
    };
  }, [queryParams]);

  return [data, loading, error];
};

export default useMarketChartData;
