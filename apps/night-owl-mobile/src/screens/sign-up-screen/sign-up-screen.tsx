import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { FullWidthButton } from '@ikigai/ui-components-native';
import { BackgroundImage } from '@ikigai/ui-components-native';
import BreakfastImage from '../../assets/breakfast.png';
// import { Ionicons } from '@expo/vector-icons'; // For the back arrow icon

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'signUpScreen'
>;

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Navigate to HomeScreen after successful sign-up
    navigation.navigate('homeScreen');
  };

  return (
    <View style={styles.container}>
      <BackgroundImage source={BreakfastImage}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            {/* <Ionicons name="arrow-back" size={32} color="white" /> */}
          </TouchableOpacity>
          <Text style={styles.title}>Night Owl</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Confirm Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {/* Sign Up Button */}
          <FullWidthButton
            text="Sign Up"
            onPress={handleSignUp}
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
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 24,
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 50, // Adjust for status bar
    left: 20,
    zIndex: 1,
  },
});
