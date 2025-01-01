import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import PorageImage from '../../assets/porridge.jpg'; // Import the Porage image
import theme from '@ikigai/theme';
import { MenuItem } from '../../mock-data/menu';
import { RootStackParamList } from '../../types/RootStackParamList';
import { ImageHeader } from '@ikigai/ui-components-native';

export const FavoritesScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const favoritesData: MenuItem[] = [
    {
      id: 0,
      name: 'Vanilla Latte',
      description: '',
      ingredients: ['espresso', 'vanilla syrup', 'milk'],
      spicy: false,
      vegetarian: true,
      price: 4.5,
      image: 'https://via.placeholder.com/300x200', // Replace with your actual image URL
    },
  ];

  const handleFavoritesPress = (item: MenuItem) => {
    navigation.navigate('menuItemScreen', { item });
  };

  return (
    <LayoutWrapper showTopNavBar={false} useScrollView={false}>
      <View style={styles.container}>
        {/* Header Section */}
        <ImageHeader
          imageSource={PorageImage}
          title="Favorites"
          titleStyle={styles.headerText}
        />

        {/* Favorites List */}
        <FlatList
          data={favoritesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleFavoritesPress(item)}
            >
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    color: theme.colors.yellow, // Gold color for the text
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
