import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  OHLCData,
  OHLCQueryParams,
} from '../../../axios/coinGecko/coins/fetchOHLCData';

export const useOHLCData = (queryParams: OHLCQueryParams): OHLCData[] => {
  const [ohlcData, setOHLCData] = useState<OHLCData[]>([]);

  useEffect(() => {
    const fetchOHLCData = async () => {
      try {
        const response: AxiosResponse<OHLCData[]> = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${queryParams.id}/ohlc`,
          {
            params: {
              vs_currency: queryParams.vs_currency,
              days: queryParams.days,
              precision: queryParams.precision,
            },
          }
        );
        setOHLCData(response.data);
      } catch (error) {
        console.error('Error fetching OHLC data:', error);
      }
    };

    fetchOHLCData();

    // Cleanup function
    return () => {
      // Cleanup tasks (if any)
    };
  }, [queryParams]);

  return ohlcData;
};
