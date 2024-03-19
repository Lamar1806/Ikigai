import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import fullmetal from '../assets/edward-elric-1920.jpeg';

export const CreditCard = () => {
  return (
    <View style={styles.container}>
      <Image source={fullmetal} style={styles.bgImage} />
      <Text style={styles.text}>Empathy Credits</Text>
      <FontAwesome
        style={styles.scanIcon}
        name="wifi"
        size={24}
        color="black"
      />
      <FontAwesome5
        style={styles.cardTypeIcon}
        name="cc-mastercard"
        size={24}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: 350,
    height: 150,
    shadowColor: '#000000', // Shadow color (black)
    shadowOpacity: 0.5, // Shadow opacity (0.5 for example)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (adjust as needed)
    shadowRadius: 15, // Shadow radius (adjust as needed)
    elevation: 5, // Elevation (for Android)
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    position: 'absolute',
    width: 350,
    height: 150,
    opacity: 0.3,
  },
  text: { color: '#fff' },
  scanIcon: {
    position: 'absolute',
    right: 15,
    bottom: '50%',
    transform: [{ rotate: '90deg' }, { translateX: 10 }],
    color: 'white',
  },
  cardTypeIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    color: 'white',
  },
});
