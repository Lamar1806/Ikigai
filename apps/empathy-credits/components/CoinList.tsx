import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import { CoinListItem } from './CoinListItem';

interface Props {
  coins: CoinMarketData[];
}

export const CoinList: React.FC<Props> = ({ coins }) => {
  if (!coins || coins.length <= 0) return <Text>Loading</Text>;

  return (
    <FlatList
      data={coins}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CoinListItem coin={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});
