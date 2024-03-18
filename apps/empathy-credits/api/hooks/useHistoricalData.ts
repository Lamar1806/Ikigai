import { useEffect, useState } from 'react';
import {
  HistoricalData,
  HistoricalDataQueryParams,
  fetchHistoricalData,
} from '../axios/fetchHistoricalData';

const useHistoricalData = ({
  id,
  date,
  localization = true,
}: HistoricalDataQueryParams) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const queryParams: HistoricalDataQueryParams = {
          id: id,
          date,
          localization,
        };
        const data = await fetchHistoricalData(queryParams);
        setHistoricalData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch historical data');
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, [id, date, localization]);

  return { loading, error, historicalData };
};

export default useHistoricalData;
