import { View, Text } from 'react-native';
import useCoinMarketData from '../api/hooks/coinGecko/coins/useCoinMarketData';

export function Home() {
  const { data, loading, error } = useCoinMarketData({ vs_currency: 'usd' });

  return (
    <View>
      {/* <BlurredCircleBackground /> */}
      <Text>error:{JSON.stringify(error)}</Text>
      <Text>loading: {JSON.stringify(loading)}</Text>
      <Text>data:{JSON.stringify(data[0])}</Text>
    </View>
  );
}
