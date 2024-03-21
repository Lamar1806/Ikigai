import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import mockdata from '../api/mocks/coinMarketData.json';
import { LineChartExample } from '../components/LineChartExample';
import { TimeFrameSelector } from '../components/TimeFrameSelector';
import { useMarketChartData } from '../api/hooks/coinGecko/coins/useMarketChartData';
import { extractCoinDetails } from '../utils/extractCoinDetails';
import { formatCurrency } from '../utils/formatCurrency';
import { numberToPercent } from '../utils/numberToPercent';
import { FullWidthButton } from '../components/FullWidthButton';

// Define the type of props for the component
type CoinDetailScreenProps = {
  navigation: any; // Replace 'any' with the correct navigation prop type if available
};

// Use functional component syntax with explicit props type
export const CoinDetailScreen: React.FC<CoinDetailScreenProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const { coin } = route.params;

  const {
    cryptoId,
    cryptoName,
    cryptoSymbol,
    currentAmount,
    priceChangePercentage24h,
    priceChange24h,
  } = extractCoinDetails(coin);
  const [vs_currency] = useState('usd');
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1);

  // Call the custom hook with the query parameters
  const { data, isLoading, error } = useMarketChartData({
    id: cryptoId,
    vs_currency,
    days: selectedTimeFrame,
  });

  useEffect(() => {
    // Change the header title when the component mounts
    navigation.setOptions({
      title: `${capitalizeFirstLetter(cryptoName)} (${capitalizeFirstLetter(
        cryptoSymbol
      )}) Details`,
    });
  }, []);

  const handleTimeFrameSelect = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
    // Update your graph data based on the selected time frame
    // Example: fetchData(timeFrame);
  };

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.columnOne}>
          <Text>{formatCurrency(currentAmount)}</Text>
          <Text>
            (
            {priceChangePercentage24h > 0.0
              ? formatCurrency(priceChangePercentage24h)
              : priceChangePercentage24h}
            )
          </Text>
        </View>
        <View style={styles.columnTwo}>
          <Text>{numberToPercent(priceChange24h)}</Text>
        </View>
      </View>
      <TimeFrameSelector onSelect={handleTimeFrameSelect} />
      <LineChartExample marketChartData={data} />
      <FullWidthButton title={'transactions'} onPress={undefined} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
  columnOne: {
    flex: 1,
    padding: 20,
  },
  columnTwo: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
