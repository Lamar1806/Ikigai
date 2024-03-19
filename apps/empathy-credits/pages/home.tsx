import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../api/react-query/queryKeys';
import {
  CoinMarketQueryParams,
  fetchCoinMarketData,
} from '../api/axios/coinGecko/coins/fetchCoinMarketData';

export function Home() {
  // const { isError, data, isSuccess, error } = useQuery({
  //   queryKey: queryKeys.pingCoinGecko,
  //   queryFn: coinGeckoRequest.pingCoinGecko,
  // });
  // console.log('data', data);
  // const { data: coinList } = useQuery({
  //   queryKey: [queryKeys.coinList],
  //   queryFn: coinGeckoRequest.coinsList,
  // });
  // const CoinMarketQueryParams: CoinMarketQueryParams = {
  //   vs_currency: 'usd', // Example values, modify as needed
  //   order: 'market_cap_desc',
  //   per_page: 5,
  //   page: 1,
  //   sparkline: false,
  //   locale: 'en',
  // };

  const coinMarketQueryParams: CoinMarketQueryParams = {
    vs_currency: 'usd',
    ids: 'bitcoin,ethereum', // Example: 'bitcoin,ethereum' or any other comma-separated cryptocurrency symbols (base) you want to query
    category: '', // Leave empty if not filtering by category or fill in with the desired coin category
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage: '1h,24h,7d', // Example: '1h,24h,7d' or any other comma-separated price change percentage values you want to include
    locale: 'en',
    precision: 'full',
  };

  const {
    data: markets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: queryKeys.coinMarketData, // Provide a unique key for this query
    queryFn: () => fetchCoinMarketData(coinMarketQueryParams), // Pass the fetchCoinMarketData function directly
  });

  console.log('markets:', markets);
  console.log('isLoading:', isLoading);
  console.log('isError:', isError);
  console.log('error:', error);
  return (
    <View>
      {/* <BlurredCircleBackground /> */}
      <Text>Homes</Text>
    </View>
  );
}
