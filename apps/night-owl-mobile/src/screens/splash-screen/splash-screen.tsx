// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BackgroundImage } from '@ikigai/ui-components-native';
// import { Images } from '@ikigai/assets';

import BreakfastImage from '../../assets/breakfast.png';
export const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    // Simulate a delay, then navigate to HomeScreen
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace SplashScreen with HomeScreen
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <BackgroundImage source={BreakfastImage}>
        <Text style={styles.text}>Night Owl</Text>
        <ActivityIndicator size="large" color="white" style={styles.loader} />
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontFamily: 'Lavishly Yours',
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});
