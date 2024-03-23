import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const BrowserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BrowserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
