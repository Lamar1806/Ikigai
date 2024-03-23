import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome5
        style={styles.icon}
        name={iconName}
        size={24}
        color="black"
      />
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    marginTop: 5,
  },
});
