import React from 'react';
import { Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';

interface LinkWrapperProps {
  url: string;
  children: React.ReactNode;
  style?: object; // Optional custom styles
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ url, children, style }) => {
  const handlePress = async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error('An error occurred while opening the URL:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Text style={[styles.link, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LinkWrapper;
