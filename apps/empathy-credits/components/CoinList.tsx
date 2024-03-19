import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null;
  last_updated: string;
  sparkline_in_7d: {
    price: number[];
  } | null;
}

interface Props {
  coins: CoinMarketData[];
}

const CoinList: React.FC<Props> = ({ coins }) => {
  return <ScrollView></ScrollView>;
};

const styles = StyleSheet.create({});

export default CoinList;
