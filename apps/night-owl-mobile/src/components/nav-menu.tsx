import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
} from 'react-native';
import ShareIcon from '../assets/share.svg';

interface MenuProps {
  visible: boolean;
  onClose: () => void;
}

export const NavMenu: React.FC<MenuProps> = ({ visible, onClose }) => {
  const menuItems = [
    'Drinks',
    'Sides',
    'Add-ons',
    'Promotions',
    'Leave A Review',
    'About Us',
    'Support',
  ];

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.menuContainer}>
          <Text style={styles.title}>Night Owl</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              // onPress={() => {}}
            >
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.shareButton}
            // onPress={() => { }}
          >
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
