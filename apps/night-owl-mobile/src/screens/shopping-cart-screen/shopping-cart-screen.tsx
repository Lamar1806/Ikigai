import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import LayoutWrapper from '../../components/layout-wrapper';
import theme from '@ikigai/theme';

const mockCartData = [
  { id: '1', name: 'Breakfast Plate', price: 23.9, quantity: 1 },
  { id: '2', name: 'Eggs', price: 3.0, quantity: 2 },
  { id: '3', name: 'Large Coffee', price: 4.5, quantity: 2 },
  { id: '4', name: 'Chips', price: 2.0, quantity: 1 },
];

export const ShoppingCartScreen = () => {
  const [cartData, setCartData] = useState(mockCartData);

  const handleRemoveItem = (id: string) => {
    setCartData(cartData.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cartData.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <LayoutWrapper
      showTopNavBar={false}
      useScrollView={false}
      showBottomNavBar={false}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FlatList
            data={cartData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleRemoveItem(item.id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={
              <View style={styles.footer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalPrice}>
                  ${calculateTotal().toFixed(2)}
                </Text>
              </View>
            }
            contentContainerStyle={styles.listContainer}
          />
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // paddingHorizontal: 16,
    paddingTop: 16,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
    marginRight: 12,
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
  removeButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
    height: 60,
  },
  checkoutButtonText: {
    color: theme.colors.yellow,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
