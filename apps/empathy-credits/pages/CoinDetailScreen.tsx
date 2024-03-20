import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useMarketChartData } from '../api/hooks/coinGecko/coins/useMarketChartData';
import { MarketChartQueryParams } from '../api/axios/coinGecko/coins/fetchMarketChartData';
import { RouteProp, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import mockdata from '../api/mocks/coinMarketData.json';
import { LineChartExample } from '../components/LineChartExample';
import { TimeFrameSelector } from '../components/TimeFrameSelector';

export const CoinDetailScreen = ({ navigation }) => {
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [vs_currency, set_vs_currency] = useState('usd');
  // Get the route object using useRoute hook
  const route = useRoute();

  // Access the params object from the route
  const { cryptoId } = route.params;

  useEffect(() => {
    // Change the header title when the component mounts
    navigation.setOptions({
      title: `${capitalizeFirstLetter(cryptoId)} Details`,
    });
  }, []);

  const [selectedTimeFrame, setSelectedTimeFrame] = useState('');

  const handleTimeFrameSelect = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
    // Update your graph data based on the selected time frame
    // Example: fetchData(timeFrame);
  };

  return (
    <View>
      <TimeFrameSelector onSelect={handleTimeFrameSelect} />
      <LineChartExample />
    </View>
  );
};
