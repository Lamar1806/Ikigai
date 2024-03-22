import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useCoinMarketData } from '../api/hooks/coinGecko/coins/useCoinMarketData';
import { CoinList } from '../components/CoinList';
import { CreditCard } from '../components/CreditCard';
// import AnimatedExample from './animationtest';

export function WalletScreen() {
  // Example query parameters
  const exampleQueryParams = { vs_currency: 'usd', perPage: 10 };
  const { data, loading, error } = useCoinMarketData(exampleQueryParams);

  return (
    <View style={styles.container}>
      <CreditCard />
      <CoinList coins={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
});
