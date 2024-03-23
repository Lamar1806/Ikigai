import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PillButton } from '../../components/PillButton';

export const CoinListItem = ({
  coin,
  coins,
  amountOwned,
  index,
  setModalVisible,
  setModalTwoVisible,
}) => {
  return (
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
};

const styles = StyleSheet.create({
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
});
