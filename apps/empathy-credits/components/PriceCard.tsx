import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const PriceCard = ({ title, value }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
