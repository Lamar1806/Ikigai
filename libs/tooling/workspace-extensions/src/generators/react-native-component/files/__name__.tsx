import React from 'react';
import { StyleSheet, Text, View } from '@ikigai/ui-components';

export const <%= name %> = () => {
  return (
    <View styles={styles.<%= name %>}>
      <Text>Hello <%= name %></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  <%= name %>: {}
});
