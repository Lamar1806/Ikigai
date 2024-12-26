import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import SVG icons or replace with your own assets
import MenuIcon from '../assets/nav-menu.svg';
import LocationIcon from '../assets/location.svg';
import SpatulaIcon from '../assets/spatula.svg';
import DownArrowIcon from '../assets/down-arrow.svg';

export const TopNavBar = () => {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <MenuIcon width={24} height={24} fill="#FFD700" />
      </TouchableOpacity>

      {/* Location Section */}
      <TouchableOpacity style={styles.locationContainer}>
        <LocationIcon width={20} height={20} fill="#FFD700" />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationTitle}>Location</Text>
          <Text style={styles.locationSubtitle}>172 Grand St, TN</Text>
          <DownArrowIcon width={24} height={24} />
        </View>
      </TouchableOpacity>

      {/* Cart Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <SpatulaIcon width={24} height={24} fill="#FFD700" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const yellow = '#FEEB75';

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
    color: yellow, // Yellow text
    fontSize: 12,
    fontWeight: 'bold',
  },
  locationSubtitle: {
    color: yellow, // Yellow text
    fontSize: 12,
  },
  badge: {
    position: 'absolute',
    top: 13,
    right: 0,
    // backgroundColor: '#FFD700', // Yellow badge
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: yellow,
    borderWidth: 1,
  },
  badgeText: {
    color: yellow, // Black text for contrast
    fontSize: 10,
    fontWeight: 'bold',
  },
});
