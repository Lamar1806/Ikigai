import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
//@ts-ignore
import CryptoFiller from '../assets/crypto-filler.jpeg';
import { FontAwesome5 } from '@expo/vector-icons';
import { formatCurrency } from '../utils/formatCurrency';
import { useNavigation } from '@react-navigation/native';

interface Props {
  coin: CoinMarketData;
}

export const CoinListItem: FC<Props> = ({ coin }) => {
  const amountOwned = 0;
  const valueOfAmountOwned = 0;

  if (!coin) {
    // Handle case where coin data is not available
    return null;
  }

  const priceChangePercentage = coin?.price_change_percentage_24h || 0;
  const iconColor = priceChangePercentage > 0 ? 'green' : 'red';

  const navigation = useNavigation();

  const handleCryptoPress = () => {
    //@ts-ignore
    navigation.navigate('CoinDetailScreen', { coin });
  };

  return (
    <TouchableOpacity
      onPress={() => handleCryptoPress()}
      style={styles.container}
    >
      <Image
        source={{ uri: coin?.image || CryptoFiller }}
        style={styles.coinImage}
      />
      <View style={styles.column}>
        <Text style={styles.headerText}>{coin?.symbol}</Text>
        <Text>{formatCurrency(coin?.current_price)}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome5
          style={styles.icon}
          name={priceChangePercentage > 0 ? 'sort-up' : 'sort-down'}
          size={24}
          color={iconColor}
        />
        <Text>{Math.abs(priceChangePercentage).toFixed(2)}%</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>{amountOwned}</Text>
        <Text>{formatCurrency(valueOfAmountOwned)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 15,
  },
  coinImage: {
    height: 25,
    width: 25,
    top: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 5,
    bottom: 5,
  },
});
