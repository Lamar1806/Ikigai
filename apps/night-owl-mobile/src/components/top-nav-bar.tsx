import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavMenu } from '../components/nav-menu';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Import SVG icons
import MenuIcon from '../assets/nav-menu.svg';
import LocationIcon from '../assets/location.svg';
import SpatulaIcon from '../assets/spatula.svg';
import DownArrowIcon from '../assets/down-arrow.svg';
import theme from '@ikigai/theme';
import { RootStackParamList } from '../types/RootStackParamList';

export const TopNavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setMenuVisible(true)}
      >
        <MenuIcon width={24} height={24} style={{ top: 4 }} />
        <NavMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
      </TouchableOpacity>

      {/* Location Section */}
      <TouchableOpacity style={styles.locationContainer}>
        <LocationIcon width={20} height={20} style={{ top: 5 }} />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationTitle}>Location</Text>
          <Text style={styles.locationSubtitle}>172 Grand St, TN</Text>
        </View>
        <DownArrowIcon width={10} height={10} style={{ top: 7 }} />
      </TouchableOpacity>

      {/* Cart Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('shoppingCartScreen')}
      >
        <SpatulaIcon width={24} height={24} />
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
    backgroundColor: '#000',
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
    color: theme.colors.yellow,
    fontSize: 12,
    fontWeight: 'bold',
  },
  locationSubtitle: {
    color: theme.colors.yellow,
    fontSize: 12,
  },

  badge: {
    position: 'absolute',
    top: 13,
    right: 0,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.yellow,
    borderWidth: 1,
  },
  badgeText: {
    color: theme.colors.yellow,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
