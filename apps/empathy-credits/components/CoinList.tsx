import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import { CoinListItem } from './CoinListItem';

interface Props {
  coins: CoinMarketData[];
}

const CoinList: React.FC<Props> = ({ coins }) => {
  return <CoinListItem coin={coins[0]} />;
};

const styles = StyleSheet.create({});

export default CoinList;
