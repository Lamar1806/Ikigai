import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import MailIcon from '../../assets/mail.svg';
import { LayoutWrapper } from '../../components/layout-wrapper';

// Example Data
const orderData = {
  status: 'Done',
  orderNumber: '1527369',
  items: [{ id: '1', name: 'Breakfast Plate', price: 23.9 }],
  total: 23.9,
};

export const ReceiptItemScreen = () => {
  const handleEmailPress = () => {
    // Handle email press action
    console.log('Email button pressed');
  };

  return (
    <LayoutWrapper showTopNavBar={false}>
      <View style={styles.container}>
        {/* Status */}
        <Text style={styles.status}>Status: {orderData.status}</Text>

        {/* Order Confirmation */}
        <Text style={styles.heading}>Order Confirmation</Text>
        <Text style={styles.orderNumber}>
          Order Number {orderData.orderNumber}
        </Text>

        {/* Order Items */}
        <FlatList
          data={orderData.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          )}
          style={styles.itemsList}
        />

        {/* Total */}
        <Text style={styles.total}>Total: ${orderData.total.toFixed(2)}</Text>

        {/* Email Button */}
        <TouchableOpacity style={styles.emailButton} onPress={handleEmailPress}>
          <View style={styles.emailIconContainer}>
            <MailIcon style={styles.emailIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },
  orderNumber: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 16,
  },
  itemsList: {
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 16,
  },
  emailButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFD700', // Yellow tint for the icon
  },
});
