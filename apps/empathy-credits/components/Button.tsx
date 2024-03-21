import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
});
