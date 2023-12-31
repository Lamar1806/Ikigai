import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundImage from '@ikigai/assets/assets/images/pexels-lina-kivaka-1813466.jpg';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={['transparent', 'transparent']}
        style={styles.gradient}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

interface CustomIconProps {
  source: any;
}

const CustomIcon: FC<CustomIconProps> = ({ source }) => {
  return <Image source={source} style={styles.icon} />;
};

export interface SignupOrLoginScreenProps {
  navigation: any;
}

export const SignupOrLoginScreen: FC<SignupOrLoginScreenProps> = ({
  navigation,
}) => {
  const handleSignInClick = () => {
    return navigation.navigate('Login');
  };

  const handleSignUpClick = () => {
    return navigation.navigate('Signup');
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

      {/* Sign In Button */}
      <CustomButton text="Sign In" onPress={handleSignInClick} />

      {/* Sign Up Button */}
      <CustomButton text="Sign Up" onPress={handleSignUpClick} />

      {/* Google Login Icon */}
      {/* <CustomIcon source={require('./path-to-your-google-icon.png')} /> */}

      {/* Apple Login Icon */}
      {/* <CustomIcon source={require('./path-to-your-apple-icon.png')} /> */}
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
  icon: {
    width: 30,
    height: 30,
    marginVertical: 10,
  },
});

export default SignupOrLoginScreen;
