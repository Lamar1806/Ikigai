import React from 'react';
import { BackgroundImage, FullWidthButton } from '@ikigai/ui-components-native';
import { View, Text, StyleSheet } from 'react-native';
import BreakfastImage from '../../assets/breakfast.png';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';

// Define the props for the screen using RootStackParamList
type LoginOrSignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'loginOrSignUpScreen'
>;

export function LoginOrSignUpScreen({ navigation }: LoginOrSignUpScreenProps) {
  return (
    <View style={styles.container}>
      <BackgroundImage source={BreakfastImage}>
        <View style={styles.content}>
          <Text style={styles.text}>Night Owl</Text>
          <FullWidthButton
            style={styles.button}
            text="Login"
            onPress={() => navigation.navigate('loginScreen')} // Navigate to loginScreen
          />
          <FullWidthButton
            style={{ borderRadius: 28 }}
            text="Sign Up"
            onPress={() => navigation.navigate('signUpScreen')} // Navigate to signUpScreen
          />
        </View>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Lavishly Yours',
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  button: {
    borderRadius: 28,
    marginBottom: 16,
  },
});
