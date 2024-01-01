import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProps } from '../types';

// Replace 'your-background-image' with the actual path or variable for your background image
import BackgroundImage from '@ikigai/assets/assets/images/pexels-lina-kivaka-1813466.jpg';

export const SignupScreen: FC<NavigationProps<'Home'>> = ({ navigation }) => {
  const handleSignUp = () => {
    return navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      {/* Background Picture with Black Overlay */}
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      />

      {/* Sign Up Form */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Enchanted Empathy</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
          secureTextEntry
        />

        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
          keyboardType="phone-pad"
        />

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(255, 255, 255, 0.9)"
        />

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Sign Up Clicked')}
        >
          <Text style={styles.buttonText} onPress={handleSignUp}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
