import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const CryptoTransactionButtons = ({
  onBuyPress,
  onSellPress,
  onSendPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onSendPress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSellPress}>
        <Text style={styles.buttonText}>Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onBuyPress}>
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
