import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LayoutWrapper from '../../components/layout-wrapper';
import theme from '@ikigai/theme';
import { CartContext } from '../../context/cart';

export const ShoppingCartScreen = () => {
  const {
    cartData,
    removeItemFromCart,
    calculateTotal,
    updateItemQuantity,
    getTotalItems,
  } = useContext(CartContext);

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
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => removeItemFromCart(item.id)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={
              <View style={styles.footer}>
                <Text style={styles.totalText}>Total Items:</Text>
                <Text style={styles.totalText}>{getTotalItems()}</Text>
                <Text style={styles.totalText}>Total Price:</Text>
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
    backgroundColor: theme.colors.lightBackground,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  itemDetails: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  itemPrice: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginTop: 4,
    fontStyle: 'italic',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  quantityButton: {
    backgroundColor: theme.colors.accent,
    padding: 8,
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  removeButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: theme.colors.lightBackground,
    padding: 12,
    borderRadius: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginVertical: 4,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.accent,
    marginTop: 8,
  },
  checkoutButton: {
    backgroundColor: theme.colors.darkBackground,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 16,
  },
  checkoutButtonText: {
    color: theme.colors.yellow,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
