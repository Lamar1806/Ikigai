import React from 'react';
import { Text as TextNative, StyleSheet, TextProps } from 'react-native';
import theme from '@ikigai/theme';

interface CustomTextProps extends TextProps {
  size?: keyof typeof theme.fontSizes; // Optional size prop to override default
  color?: keyof typeof theme.colors; // Optional color prop to override default
  bold?: boolean; // Optional bold style
}

export const Text: React.FC<CustomTextProps> = ({
  children,
  size = 'md', // Default font size
  color = 'text', // Default text color
  bold = false, // Default to normal weight
  style,
  ...rest
}) => {
  return (
    <TextNative
      style={[
        styles.text,
        {
          fontSize: theme.fontSizes[size as keyof typeof theme.fontSizes],
          color: theme.colors[color as keyof typeof theme.colors],
        },
        bold && styles.bold,
        style, // Allows overriding or extending styles
      ]}
      {...rest}
    >
      {children}
    </TextNative>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamilies.body, // Default font family
  },
  bold: {
    fontFamily: theme.fontFamilies.bold, // Bold font family
  },
});

export default Text;
