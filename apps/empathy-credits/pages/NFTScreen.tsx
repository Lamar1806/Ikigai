import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const NFTScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NFTScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
