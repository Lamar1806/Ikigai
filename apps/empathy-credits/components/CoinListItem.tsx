import { StyleSheet, Text, View, Image } from 'react-native';
import React, { FC } from 'react';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import CryptoFiller from '../assets/crypto-filler.jpeg';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from '@emotion/native';

const HeaderText = styled.Text`
  font-weight: bold;
  color: white;
`;

interface Props {
  coin: CoinMarketData;
}

export const CoinListItem: FC<Props> = ({ coin }) => {
  console.log('image: ', coin.image);
  const amountOwned = 0;
  const usdValue = 0;
  return (
    <View style={styles.container}>
      <Image
        style={styles.coinImage}
        source={{ uri: coin?.image || CryptoFiller }}
      />

      <HeaderText>{coin.name}</HeaderText>
      <Text>{coin.current_price}</Text>

      {coin.price_change_percentage_24h > 0 ? (
        <FontAwesome5 name="sort-up" size={24} color="green" />
      ) : (
        <FontAwesome5 name="sort-down" size={24} color="red" />
      )}
      <Text>{Math.round(coin.price_change_percentage_24h * 100) / 100}</Text>
      <Text>{amountOwned}</Text>
      <Text>{usdValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 15,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
});
