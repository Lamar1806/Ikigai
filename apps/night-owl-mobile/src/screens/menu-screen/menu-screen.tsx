import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../types/RootStackParamList'; // Ensure this is correctly defined
import { MenuContext } from '../../context/MenuContext';
import { ActiveFilter } from '../../hooks/use-menu';

export const MenuScreen = () => {
  // Correctly type the navigation hook
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Use the custom hook
  const {
    searchText,
    setSearchText,
    filteredData,
    activeFilter,
    handleFilter,
  } = useContext(MenuContext);

  return (
    <LayoutWrapper useScrollView={false}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Our Food Menu"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={'#999'}
          />
        </View>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          {['Drinks', 'Sides', 'Add-Ons'].map((filter: ActiveFilter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilter,
              ]}
              onPress={() => handleFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Food List */}
        <ScrollView contentContainerStyle={styles.listContainer}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => {
                // Navigate to the menu item screen with the selected item
                navigation.navigate('menuItemScreen', { item });
              }}
            >
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </View>
              <Image
                source={{
                  uri: item.image || 'https://via.placeholder.com/60',
                }}
                style={styles.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 12,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeFilter: {
    backgroundColor: '#007BFF',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
