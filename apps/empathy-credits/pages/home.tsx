import { View, Text } from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { coinGeckoRequest } from '../api/axios/coin-data';
import { queryKeys } from '../api/react-query/queryKeys';

export function Home() {
  // const { isError, data, isSuccess, error } = useQuery({
  //   queryKey: queryKeys.pingCoinGecko,
  //   queryFn: coinGeckoRequest.pingCoinGecko,
  // });
  // const { data: coinList } = useQuery({
  //   queryKey: [queryKeys.coinList],
  //   queryFn: coinGeckoRequest.coinsList,
  // });
  const CoinMarketQueryParams = {
    vs_currency: 'usd', // Example values, modify as needed
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    locale: 'en',
  };

  const {
    data: markets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['coinMarketData'], // Provide a unique key for this query
    queryFn: () => coinGeckoRequest.fetchCoinMarketData(CoinMarketQueryParams), // Pass the fetchCoinMarketData function directly
    // queryFnParams: CoinMarketQueryParams, // Pass the query parameters if necessary
  });
  console.log(markets);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
