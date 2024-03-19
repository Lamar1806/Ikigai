import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCoinMarketData } from '../api/hooks/coinGecko/coins/useCoinMarketData';
import { CoinList } from '../components/CoinList';
import { CreditCard } from '../components/CreditCard';

export function Home() {
  // Example query parameters
  const exampleQueryParams = { vs_currency: 'usd', perPage: 10 };
  const { data, loading, error } = useCoinMarketData(exampleQueryParams);
  console.log('Data:', data);
  console.log('Loading:', loading);
  console.log('Error:', error);

  // console.log('coin', data[0]);

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
  },
});
