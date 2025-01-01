import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import CardIcon from '../../assets/card.svg'; // Replace with your actual SVG path
import PayPalIcon from '../../assets/paypal.svg'; // Replace with your actual SVG path
import VenmoIcon from '../../assets/venmo.svg'; // Replace with your actual SVG path
import CashAppIcon from '../../assets/cashapp.svg'; // Replace with your actual SVG path
import ChevronRight from '../../assets/chevron-right.svg'; // Replace with your actual SVG path
import theme from '@ikigai/theme';

export const AddPaymentMethodScreen = () => {
  const paymentMethods = [
    { id: '1', name: 'Credit or Debit Card', icon: CardIcon },
    { id: '2', name: 'PayPal', icon: PayPalIcon },
    { id: '3', name: 'Venmo', icon: VenmoIcon },
    { id: '4', name: 'Cashapp', icon: CashAppIcon },
  ];

  const handleMethodPress = (methodName: string) => {
    console.log(`Selected payment method: ${methodName}`);
  };

  return (
    <LayoutWrapper showTopNavBar={false} showBottomNavBar={false}>
      <View style={styles.container}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.methodContainer}
            onPress={() => handleMethodPress(method.name)}
          >
            <method.icon width={24} height={24} style={styles.icon} />
            <Text style={styles.methodName}>{method.name}</Text>
            <ChevronRight style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
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
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 16,
  },
  methodName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#333', // Adjust the color as needed
  },
});
