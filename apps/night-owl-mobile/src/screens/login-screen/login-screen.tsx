import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FullWidthButton } from '@ikigai/ui-components-native';
import { BackgroundImage } from '@ikigai/ui-components-native';
import BreakfastImage from '../../assets/breakfast.png';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'loginScreen'
>;

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic navigation to HomeScreen
    navigation.navigate('homeScreen');
  };

  return (
    <View style={styles.container}>
      <BackgroundImage source={BreakfastImage}>
        <View style={styles.content}>
          <Text style={styles.title}>Night Owl</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Submit Button */}
          <FullWidthButton
            text="Login"
            onPress={handleLogin}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </BackgroundImage>
    </View>
  );
};

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
    paddingHorizontal: 20,
    width: '100%',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    fontFamily: 'Lavishly Yours', // Use your custom font if needed
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 24,
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    borderRadius: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
