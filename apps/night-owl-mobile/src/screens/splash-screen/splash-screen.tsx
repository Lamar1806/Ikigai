import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BackgroundImage } from '@ikigai/ui-components-native';
import BreakfastImage from '../../assets/breakfast.png';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';

// Define props using RootStackParamList and 'splashScreen' route
type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'splashScreen'
>;

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay, then navigate to HomeScreen
    const timer = setTimeout(() => {
      navigation.replace('loginOrSignUpScreen'); // Navigate to homeScreen
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
