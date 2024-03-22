import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import { formatCurrency } from '../utils/formatCurrency';

interface Props {
  coin: CoinMarketData;
  onChange: (coin: CoinMarketData) => void;
}

export const CoinListItemBasic: FC<Props> = ({ coin, onChange }) => {
  const amountOwned = 0;
  const valueOfAmountOwned = 0;

  const handleCryptoPress = () => {
    onChange(coin);
  };

  return (
    <TouchableOpacity
      onPress={() => handleCryptoPress()}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: coin?.image }} style={styles.coinImage} />
        <Text>{coin?.name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>{amountOwned} </Text>
        <Text>{formatCurrency(valueOfAmountOwned)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginRight: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
