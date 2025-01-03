import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LayoutWrapper } from '../../components/layout-wrapper';

const receiptData = [
  { id: '1', orderNumber: '1527369', total: 23.9 },
  { id: '2', orderNumber: '1527370', total: 15.5 },
  { id: '3', orderNumber: '1527371', total: 30.4 },
  // Add more receipt items here
];

//todo limit recite items to just the last 3 orders.
export const ReceiptScreen = () => {
  const navigation = useNavigation();

  const navigateToReceiptItem = (orderId) => {
    navigation.navigate('receiptItemScreen', { orderId });
  };

  const renderReceiptItem = ({ item }) => (
    <TouchableOpacity
      style={styles.receiptItem}
      onPress={() => navigateToReceiptItem(item.id)}
    >
      <View style={styles.receiptInfo}>
        <Text style={styles.icon}>🍴</Text>
        <Text style={styles.orderNumber}>Order Number {item.orderNumber}</Text>
      </View>
      <Text style={styles.total}>${item.total.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <LayoutWrapper useScrollView={false}>
      <View style={styles.container}>
        <FlatList
          data={receiptData}
          keyExtractor={(item) => item.id}
          renderItem={renderReceiptItem}
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  receiptItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  receiptInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    marginRight: 8,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
