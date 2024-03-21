import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import { CoinListItemBasic } from './CoinListItemBasic';

interface Props {
  coins: CoinMarketData[];
  onChange: () => void;
}
export const CoinListBasic: FC<Props> = ({ coins, onChange }) => {
  if (!coins || coins.length <= 0) return <Text>Loading</Text>;

  return (
    <FlatList
      data={coins}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CoinListItemBasic coin={item} onChange={onChange} />
      )}
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
