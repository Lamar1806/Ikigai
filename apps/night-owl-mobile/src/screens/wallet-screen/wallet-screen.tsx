import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList';
import { LayoutWrapper } from '../../components/layout-wrapper';

export const WalletScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const paymentMethods = [
    {
      id: '1',
      type: 'Visa',
      name: 'Master',
      lastFour: '1234',
      icon: 'https://via.placeholder.com/40', // Replace with actual icon URL
    },
  ];

  const handlePaymentMethodPress = (id: string) => {
    console.log('Payment Method Pressed:', id);
    navigation.navigate('viewPaymentMethodScreen');
  };

  const handleAddPaymentMethod = () => {
    navigation.navigate('addPaymentMethodScreen');
  };

  return (
    <LayoutWrapper
      showTopNavBar={false}
      showBottomNavBar={false}
      useScrollView={false}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Payment Methods</Text>
        <FlatList
          data={paymentMethods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.paymentMethodContainer}
              onPress={() => handlePaymentMethodPress(item.id)}
            >
              <Image
                source={{ uri: item.icon }}
                style={styles.paymentMethodIcon}
              />
              <View style={styles.paymentMethodDetails}>
                <Text style={styles.paymentMethodName}>{item.name}</Text>
                <Text style={styles.paymentMethodLastFour}>
                  •••• {item.lastFour}
                </Text>
              </View>
              <Text style={styles.arrow}>&gt;</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <TouchableOpacity
              style={styles.addPaymentButton}
              onPress={handleAddPaymentMethod}
            >
              <Text style={styles.addPaymentText}>+ Add Payment Method</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </LayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentMethodLastFour: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  addPaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 20,
  },
  addPaymentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
