import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PillButton } from '../components/PillButton';
import { FilterButton } from '../components/FilterButton';
import { Button } from '../components/Button';
import { DownChevronIcon } from '../components/icons/DownChevronIcon';
import { SlideUpModal } from '../components/SlideUpModal';
import { useCoinMarketData } from '../api/hooks/coinGecko/coins/useCoinMarketData';
import { CoinListBasic } from '../components/CoinListBasic';

export const TradeScreen = ({ navigation }) => {
  const currencyName = 'Ethereum';
  const amountOwned = 0;

  const exampleQueryParams = { vs_currency: 'usd', perPage: 10 };
  const { data: coins, loading, error } = useCoinMarketData(exampleQueryParams);

  const [coinOne, setCoinOne] = useState(null);
  const [coinTwo, setCoinTwo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTwoVisible, setModalTwoVisible] = useState(false);

  const handleAddCrypto = () => {
    navigation.navigate('Buy');
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseModalTwo = () => {
    setModalTwoVisible(false);
  };

  const handleSetCoinOne = (coin) => {
    setCoinOne(coin);
    setModalVisible(false);
  };

  const handleSetCoinTwo = (coin) => {
    setCoinTwo(coin);
    setModalTwoVisible(false);
  };

  const renderCoin = (coin, index) => (
    <View key={index} style={styles.row}>
      <View>
        <Text style={styles.cryptoName}>
          {coin ? coin.name : coins[0]?.name}
        </Text>
        <PillButton
          title={coin ? coin.symbol : coins[0]?.symbol}
          imageSource={coin ? coin.image : coins[0]?.image}
          onPress={() =>
            index === 0 ? setModalVisible(true) : setModalTwoVisible(true)
          }
          style={undefined}
        />
      </View>
      <View style={styles.tradeAmount}>
        <Text>
          <Text style={{ color: 'blue' }}>Max</Text> {amountOwned}{' '}
          {coin ? coin.symbol : coins[1]?.symbol}
        </Text>
        <Text>0</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Text>Swap & Bridge</Text>
          <FilterButton onPress={undefined} />
        </View>
        <SlideUpModal visible={modalVisible} onClose={handleCloseModal}>
          <CoinListBasic coins={coins} onChange={handleSetCoinOne} />
        </SlideUpModal>
        <SlideUpModal visible={modalTwoVisible} onClose={handleCloseModalTwo}>
          <CoinListBasic coins={coins} onChange={handleSetCoinTwo} />
        </SlideUpModal>
        {renderCoin(coinOne, 0)}
        {renderCoin(coinTwo, 1)}
        <View style={styles.chevronContainer}>
          <DownChevronIcon />
        </View>
      </View>
      {coinOne && (
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Your wallet has no {coinOne.name} right now. Add some and start
            trading it immediately
          </Text>
          <Button
            label={`Add ${coinOne.name}`}
            onPress={handleAddCrypto}
            style={undefined}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  innerContainer: {
    borderColor: 'rgba(128, 128, 128, 0.8)',
    borderWidth: 1,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(128, 128, 128, 0.8)',
  },
  cryptoName: {
    marginBottom: 5,
  },
  tradeAmount: {
    alignItems: 'flex-end',
  },
  chevronContainer: {
    position: 'absolute',
    top: 150,
    left: '50%',
    backgroundColor: 'white',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  bottomText: {
    flex: 1,
  },
});
