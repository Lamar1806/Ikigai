import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import ShareIcon from '../../assets/share.svg'; // Replace with your actual share icon asset
import theme from '@ikigai/theme';

export interface AccountScreenProps {}

export function AccountScreen(props: AccountScreenProps) {
  const handleFavoritesPress = () => {
    console.log('Favorites pressed');
  };

  const handleWalletPress = () => {
    console.log('Wallet pressed');
  };

  const handleOrdersPress = () => {
    console.log('Orders pressed');
  };

  const handleSharePress = () => {
    console.log('Share button pressed');
  };

  return (
    <LayoutWrapper>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/500x150?text=Night+Owl+Header',
            }}
            style={styles.headerImage}
          />
          <Text style={styles.logoText}>Night Owl</Text>
        </View>
        <View style={styles.innerContainer}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <Text style={styles.profileName}>Aaron Langford</Text>
            <Image
              source={{
                uri: 'https://via.placeholder.com/100x100?text=Profile',
              }}
              style={styles.profileImage}
            />
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleFavoritesPress}
          >
            <Text style={styles.buttonText}>Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleWalletPress}>
            <Text style={styles.buttonText}>Wallet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleOrdersPress}>
            <Text style={styles.buttonText}>Orders</Text>
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity
            style={styles.shareButton}
            onPress={handleSharePress}
          >
            <View style={styles.shareIconContainer}>
              <ShareIcon width={24} height={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutWrapper>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    width: '100%',
    height: 150, // Matches the headerImage height
    marginBottom: 16,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoText: {
    fontFamily: theme.fontFamilies.header,
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.yellow, // Gold color for text
    bottom: 8,
    alignSelf: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.yellow, // Gold color for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  shareIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    color: theme.colors.yellow, // Gold color for share icon
  },
});
