import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { FC, useEffect } from 'react';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
//@ts-ignore
import CryptoFiller from '../assets/crypto-filler.jpeg';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from '@emotion/native';
import { formatCurrency } from '../utils/formatCurrency';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: white;
  padding: 15px;
`;
const CoinImage = styled.Image`
  height: 25px;
  width: 25px;
  top: 10px;
`;
const HeaderText = styled.Text`
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;

const Column = styled.View`
  flex: 1;
  align-items: center;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

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
    navigation.navigate('CoinDetailScreen', {
      cryptoId: coin?.id,
      cryptoName: coin?.name,
      cryptoSymbol: coin?.symbol,
      currentAmount: coin?.current_price,
      priceChangePercentage24h: coin?.price_change_percentage_24h,
      priceChange: coin?.price_change_24h,
    });
  };

  return (
    <TouchableOpacity onPress={() => handleCryptoPress()}>
      <Container>
        <CoinImage source={{ uri: coin?.image || CryptoFiller }} />
        <Column>
          <HeaderText>{coin?.symbol}</HeaderText>
          <Text>{formatCurrency(coin?.current_price)}</Text>
        </Column>
        <Row>
          <FontAwesome5
            style={{ marginRight: 5, bottom: 5 }}
            name={priceChangePercentage > 0 ? 'sort-up' : 'sort-down'}
            size={24}
            color={iconColor}
          />
          <Text>{Math.abs(priceChangePercentage).toFixed(2)}%</Text>
        </Row>
        <Column>
          <HeaderText>{amountOwned}</HeaderText>
          <Text>{formatCurrency(valueOfAmountOwned)}</Text>
        </Column>
      </Container>
    </TouchableOpacity>
  );
};
