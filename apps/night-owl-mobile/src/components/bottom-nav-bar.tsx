import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

// Import SVGs as components
import HomeIcon from '../assets/home.svg';
import MenuIcon from '../assets/menu.svg';
import ReceiptIcon from '../assets/receipt.svg';
import AccountIcon from '../assets/account.svg';

export const BottomNavbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigation = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleNavigation('homeScreen')}
      >
        <HomeIcon width={30} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleNavigation('menuScreen')}
      >
        <MenuIcon width={30} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleNavigation('receiptScreen')}
      >
        <ReceiptIcon width={30} height={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handleNavigation('accountScreen')}
      >
        <AccountIcon width={30} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    height: Platform.OS === 'ios' ? 100 : 50, // Base height of the navbar
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Add padding for iOS
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
