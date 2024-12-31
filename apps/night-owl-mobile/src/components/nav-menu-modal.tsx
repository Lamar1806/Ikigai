import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList'; // Adjust the import path as needed
import ShareIcon from '../assets/share.svg';
import { MenuContext } from '../context/MenuContext';

interface MenuProps {
  visible: boolean;
  onClose: () => void;
}

export const NavMenuModal: React.FC<MenuProps> = ({ visible, onClose }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { setActiveFilter } = useContext(MenuContext);

  const handleNavigation = (item: string) => {
    switch (item) {
      case 'Drinks':
        setActiveFilter('Drinks');
        navigation.navigate('menuScreen');
        break;
      case 'Sides':
        setActiveFilter('Sides');
        navigation.navigate('menuScreen');
        break;
      case 'Add-Ons':
        setActiveFilter('Add-Ons');
        navigation.navigate('menuScreen');
        break;
      case 'Promotions':
        navigation.navigate('favoritesScreen');
        break;
      case 'Leave A Review':
        navigation.navigate('feedbackScreen');
        break;
      case 'About Us':
        navigation.navigate('aboutUsScreen');
        break;
      case 'Support':
        navigation.navigate('supportScreen');
        break;
      default:
        break;
    }
    onClose(); // Close the modal after navigation
  };

  const menuItems = [
    'Drinks',
    'Sides',
    'Add-Ons',
    'Promotions',
    'Leave A Review',
    'About Us',
    'Support',
  ];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <SafeAreaView style={styles.menuContainer}>
          <Text style={styles.title}>Night Owl</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleNavigation(item)}
            >
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.shareButton}
            // Add functionality for sharing here
          >
            <ShareIcon />
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-start',
  },
  menuContainer: {
    backgroundColor: 'black',
    width: '70%',
    height: '100%',
    padding: 20,
    borderRightWidth: 1,
    borderColor: 'yellow',
  },
  title: {
    color: 'yellow',
    fontSize: 24,
    fontFamily: 'Lavishly Yours', // Use your preferred font
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
    paddingVertical: 15,
  },
  menuText: {
    color: 'yellow',
    fontSize: 18,
  },
  shareButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  shareText: {
    color: 'yellow',
    fontSize: 24,
  },
});
