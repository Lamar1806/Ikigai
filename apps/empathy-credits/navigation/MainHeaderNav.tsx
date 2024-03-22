import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import cryptoWallet from '../assets/crytoWallet.png';

export const MainHeaderNav = ({ navigation, scene }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Settings')}
    >
      <View>
        <Image style={styles.walletImage} source={cryptoWallet} />
      </View>
      <View>
        <Text>Wallet 1</Text>
        <Text style={styles.text}>View Settings</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 75,
    padding: 15,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 12,
  },
  walletImage: {
    marginRight: 5,
    height: 25,
    width: 25,
  },
});
