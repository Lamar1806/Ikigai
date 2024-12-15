import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  textColor?: string; // Optional: Customize text color
  borderColor?: string; // Optional: Customize border color
  borderRadius?: number; // Optional: Customize border radius
  style?: ViewStyle; // Optional: Additional styling for the button
  textStyle?: TextStyle; // Optional: Additional styling for the text
}

export const FullWidthButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  textColor = 'white',
  borderColor = 'white',
  borderRadius = 8,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { borderColor, borderRadius },
        style, // Allow custom styles to be applied
      ]}
      activeOpacity={0.7} // For better feedback on press
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%', // Full width
    borderWidth: 2, // Border thickness
    backgroundColor: 'transparent', // Transparent background
    paddingVertical: 12, // Vertical padding
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  text: {
    fontSize: 16, // Default font size
    fontWeight: 'bold', // Bold text
  },
});
