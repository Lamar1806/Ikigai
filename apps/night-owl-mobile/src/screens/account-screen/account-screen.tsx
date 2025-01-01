import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList';
import { LayoutWrapper } from '../../components/layout-wrapper';
import ShareIcon from '../../assets/share.svg';
import OwlImage from '../../assets/owl.jpg';
import theme from '@ikigai/theme';
import { ImageHeader } from '@ikigai/ui-components-native';

export interface AccountScreenProps {}

export function AccountScreen(props: AccountScreenProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleFavoritesPress = () => {
    navigation.navigate('favoritesScreen');
  };

  const handleWalletPress = () => {
    navigation.navigate('walletScreen');
  };

  const handleOrdersPress = () => {
    navigation.navigate('receiptScreen');
  };

  const handleSharePress = () => {
    console.log('Share button pressed');
  };

  return (
    <LayoutWrapper showTopNavBar={false}>
      <View style={styles.container}>
        {/* Header Section */}
        <ImageHeader
          imageSource={OwlImage}
          title="Night Owl"
          titleStyle={styles.headerText}
        />
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
  headerText: {
    color: theme.colors.yellow,
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
    color: theme.colors.yellow,
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
});
