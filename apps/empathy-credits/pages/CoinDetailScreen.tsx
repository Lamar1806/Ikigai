import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import mockdata from '../api/mocks/coinMarketData.json';
import { LineChartExample } from '../components/LineChartExample';
import { TimeFrameSelector } from '../components/TimeFrameSelector';
import axios from 'axios';
import { useMarketChartData } from '../api/hooks/coinGecko/coins/useMarketChartData';

// Define the type of props for the component
type CoinDetailScreenProps = {
  navigation: any; // Replace 'any' with the correct navigation prop type if available
};

// Use functional component syntax with explicit props type
export const CoinDetailScreen: React.FC<CoinDetailScreenProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const { cryptoId, cryptoName, cryptoSymbol } = route.params;

  const [numberOfDays, setNumberOfDays] = useState(1);

  const [vs_currency] = useState('usd');

  // Call the custom hook with the query parameters
  const { data, isLoading, error } = useMarketChartData({
    id: cryptoId,
    vs_currency,
    days: numberOfDays,
  });

  useEffect(() => {
    // Change the header title when the component mounts
    navigation.setOptions({
      title: `${capitalizeFirstLetter(cryptoName)} (${capitalizeFirstLetter(
        cryptoSymbol
      )}) Details`,
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
      <LineChartExample marketChartData={data} />
    </View>
  );
};
