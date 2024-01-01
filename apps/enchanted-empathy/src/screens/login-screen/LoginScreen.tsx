import React, { FC, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundImage from '@ikigai/assets/assets/images/pexels-lina-kivaka-1813466.jpg';
import { NavigationProps } from '../types';

export const LoginScreen: FC<NavigationProps<'Home'>> = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    return navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Background Picture with Black Overlay */}
      <Image source={BackgroundImage} style={styles.backgroundImage} />
      <LinearGradient
        colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']}
        style={styles.overlay}
      />

      {/* Enchanted Empathy Header */}
      <Text style={styles.header}>Enchanted Empathy</Text>

      {/* Login Input */}
      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="white"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['transparent', 'transparent']}
          style={styles.gradient}
        />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'white',
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
  },
});

export default LoginScreen;
