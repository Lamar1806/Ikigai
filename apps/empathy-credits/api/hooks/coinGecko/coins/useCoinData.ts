import { useState, useEffect } from 'react';
import {
  CoinData,
  CoinQueryParams,
  fetchCoinData,
} from '../../../axios/coinGecko/coins/fetchCoinData';
import { useQuery } from '@tanstack/react-query';

export const useCoinData = (
  coinId: string,
  queryParams?: CoinQueryParams
): [CoinData | null, boolean, string | null] => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['coinData', coinId],
    queryFn: () => fetchCoinData(coinId, queryParams),
  });

  return { data, isLoading, error };
};
