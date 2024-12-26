import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import SVG icons or replace with your own assets
import MenuIcon from '../assets/menu.svg';
import LocationIcon from '../assets/location.svg';
import CartIcon from '../assets/cart.svg';

export const TopNavBar = () => {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <MenuIcon width={24} height={24} fill="#FFD700" />
      </TouchableOpacity>

      {/* Location Section */}
      <View style={styles.locationContainer}>
        <LocationIcon width={20} height={20} fill="#FFD700" />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationTitle}>Location</Text>
          <Text style={styles.locationSubtitle}>172 Grand St, TN</Text>
        </View>
      </View>

      {/* Cart Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <CartIcon width={24} height={24} fill="#FFD700" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    paddingHorizontal: 16,
    height: 60,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTextContainer: {
    marginLeft: 8,
  },
  locationTitle: {
    color: '#FFD700', // Yellow text
    fontSize: 12,
    fontWeight: 'bold',
  },
  locationSubtitle: {
    color: '#FFD700', // Yellow text
    fontSize: 12,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FFD700', // Yellow badge
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#000', // Black text for contrast
    fontSize: 10,
    fontWeight: 'bold',
  },
});
