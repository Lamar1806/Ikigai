import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import {
  coinGeckoRequest,
  CoinMarketQueryParams,
} from '../api/axios/coin-data';
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
  const CoinMarketQueryParams: CoinMarketQueryParams = {
    vs_currency: 'usd', // Example values, modify as needed
    order: 'market_cap_desc',
    per_page: 5,
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
    queryKey: queryKeys.coinMarketData, // Provide a unique key for this query
    queryFn: () => coinGeckoRequest.fetchCoinMarketData(CoinMarketQueryParams), // Pass the fetchCoinMarketData function directly
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
