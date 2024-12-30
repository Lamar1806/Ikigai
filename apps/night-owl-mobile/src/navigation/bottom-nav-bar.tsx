import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextStyle,
} from 'react-native';
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

// Import SVGs as components
import HomeIcon from '../assets/home.svg';
import MenuIcon from '../assets/menu.svg';
import ReceiptIcon from '../assets/receipt.svg';
import AccountIcon from '../assets/account.svg';
import theme from '@ikigai/theme';

export const BottomNavbar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute(); // Hook to get the current route

  // Function to handle navigation
  const handleNavigation = (routeName: keyof RootStackParamList) => {
    navigation.navigate(routeName);
  };

  // Helper function to determine if the current route is active
  const isActive = (routeName: keyof RootStackParamList) =>
    route.name === routeName;

  return (
    <View style={styles.navbar}>
      {/* Home */}
      <TouchableOpacity
        style={[
          styles.navItem,
          isActive('homeScreen') && styles.activeNavItem, // Apply active style
        ]}
        onPress={() => handleNavigation('homeScreen')}
      >
        <HomeIcon
          width={30}
          height={20}
          style={
            isActive('homeScreen')
              ? [styles.activeIcon as TextStyle]
              : undefined
          }
        />
      </TouchableOpacity>
      {/* Menu */}
      <TouchableOpacity
        style={[
          styles.navItem,
          isActive('menuScreen') && styles.activeNavItem, // Apply active style
        ]}
        onPress={() => handleNavigation('menuScreen')}
      >
        <MenuIcon
          width={30}
          height={20}
          style={
            isActive('menuScreen')
              ? [styles.activeIcon as TextStyle]
              : undefined
          }
        />
      </TouchableOpacity>
      {/* Receipt */}
      <TouchableOpacity
        style={[
          styles.navItem,
          isActive('receiptScreen') && styles.activeNavItem, // Apply active style
        ]}
        onPress={() => handleNavigation('receiptScreen')}
      >
        <ReceiptIcon
          width={30}
          height={20}
          style={
            isActive('receiptScreen')
              ? [styles.activeIcon as TextStyle]
              : undefined
          }
        />
      </TouchableOpacity>
      {/* Account */}
      <TouchableOpacity
        style={[
          styles.navItem,
          isActive('accountScreen') && styles.activeNavItem, // Apply active style
        ]}
        onPress={() => handleNavigation('accountScreen')}
      >
        <AccountIcon
          width={30}
          height={20}
          style={
            isActive('accountScreen')
              ? [styles.activeIcon as TextStyle]
              : undefined
          }
        />
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
  activeNavItem: {
    borderColor: theme.colors.yellow, // Yellow outline
    borderWidth: 2,
    borderRadius: theme.borderRadius.lg, // Round the border for aesthetics
    padding: 5,
  },
  activeIcon: {
    color: theme.colors.black, // Yellow color for the active icon
  },
});
