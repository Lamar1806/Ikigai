import { useState, useEffect } from 'react';
import {
  PriceData,
  PriceQueryParams,
  fetchPriceData,
} from '../axios/fetchPriceData';

const usePriceData = (
  queryParams: PriceQueryParams
): [PriceData | null, boolean, string | null] => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPriceData(queryParams);
        setPriceData(data);
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
  }, [queryParams]);

  return [priceData, isLoading, error];
};

export default usePriceData;
