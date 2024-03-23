import { View, StyleSheet } from 'react-native';
import { IconButton } from './IconButon';
import React from 'react';

export const ButtonsRow = () => {
  return (
    <View style={styles.container}>
      <IconButton
        iconName="paper-plane"
        label="Send"
        onPress={() => console.log('Send pressed')}
      />
      <IconButton
        iconName="money-bill-alt"
        label="Receive"
        onPress={() => console.log('Receive pressed')}
      />
      <IconButton
        iconName="shopping-cart"
        label="Buy"
        onPress={() => console.log('Buy pressed')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
});
