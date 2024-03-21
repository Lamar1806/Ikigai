import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { LineChartExample } from '../components/LineChartExample';
import { TimeFrameSelector } from '../components/TimeFrameSelector';
import { useMarketChartData } from '../api/hooks/coinGecko/coins/useMarketChartData';
import { extractCoinDetails } from '../utils/extractCoinDetails';
import { formatCurrency } from '../utils/formatCurrency';
import { numberToPercent } from '../utils/numberToPercent';
import { FullWidthButton } from '../components/FullWidthButton';
import { CryptoTransactionButtons } from '../components/CryptoTransactionButtons';
import { CoinMarketData } from '../api/axios/coinGecko/coins/fetchCoinMarketData';
import { ScrollView } from 'react-native-gesture-handler';
import { abbreviateNumber } from '../utils/abbreviateNumber';

// Define the type of props for the component
type CoinDetailScreenProps = {
  navigation: any; // Replace 'any' with the correct navigation prop type if available
};

// Use functional component syntax with explicit props type
export const CoinDetailScreen: React.FC<CoinDetailScreenProps> = ({
  navigation,
}) => {
  const route = useRoute();
  const { coin }: { coin: CoinMarketData } = route.params;

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
    <View style={styles.container}>
      <ScrollView>
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
        <LineChartExample marketChartData={data} />
        <TimeFrameSelector onSelect={handleTimeFrameSelect} />

        <View style={{ padding: 15 }}>
          <Text style={styles.label}>Market Data</Text>
          <View style={{ padding: 15 }}>
            {coin?.total_volume !== null &&
              coin?.total_volume !== undefined && (
                <View style={styles.rowCoinData}>
                  <Text style={styles.label}>Volume</Text>
                  <Text>{abbreviateNumber(coin.total_volume)}</Text>
                </View>
              )}
            {coin?.market_cap_rank !== null &&
              coin?.market_cap_rank !== undefined && (
                <View style={styles.rowCoinData}>
                  <Text style={styles.label}>Rank</Text>
                  <Text>{coin.market_cap_rank}</Text>
                </View>
              )}
            {coin?.circulating_supply !== null &&
              coin?.circulating_supply !== undefined && (
                <View style={styles.rowCoinData}>
                  <Text style={styles.label}>Circulating</Text>
                  <Text>{abbreviateNumber(coin.circulating_supply)}</Text>
                </View>
              )}
            {coin?.total_supply !== null &&
              coin?.total_supply !== undefined && (
                <View style={styles.rowCoinData}>
                  <Text style={styles.label}>Total Supply</Text>
                  <Text>{abbreviateNumber(coin.total_supply)}</Text>
                </View>
              )}
            {coin?.max_supply !== null && coin?.max_supply !== undefined && (
              <View style={styles.rowCoinData}>
                <Text style={styles.label}>Max Supply</Text>
                <Text>{abbreviateNumber(coin.max_supply)}</Text>
              </View>
            )}
            {coin?.ath !== null && coin?.ath !== undefined && (
              <View style={styles.rowCoinData}>
                <Text style={styles.label}>All-Time High</Text>
                <Text>{abbreviateNumber(coin.ath)}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <CryptoTransactionButtons
        onBuyPress={undefined}
        onSellPress={undefined}
        onSendPress={undefined}
        style={undefined}
      />
      {/* <FullWidthButton title={'transactions'} onPress={undefined} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  rowCoinData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.1)', // Very faint grey
    paddingBottom: 5, // Add some padding to separate the text from the underline
    marginTop: 15,
  },
  label: {
    fontWeight: 'bold',
  },
});
