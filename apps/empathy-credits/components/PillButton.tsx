import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const PillButton = ({ title, imageSource }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <FontAwesome5 name="chevron-down" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 16,
    marginLeft: 8,
  },
});

export default PillButton;
