import { View, Text, StyleSheet } from 'react-native';
import useCoinMarketData from '../api/hooks/coinGecko/coins/useCoinMarketData';
import CoinList from '../components/CoinList';
import { CreditCard } from '../components/CreditCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
  const { data, loading, error } = useCoinMarketData({ vs_currency: 'usd' });

  return (
    <View style={styles.container}>
      <CreditCard />
      <CoinList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
