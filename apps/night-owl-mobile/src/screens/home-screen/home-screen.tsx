import React from 'react';

import { View, Text, SafeAreaView } from 'react-native';

/* eslint-disable-next-line */
export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  return (
    <SafeAreaView>
      <Text>Welcome to homeScreen!</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
