import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const DollarButton = ({ amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(amount)}>
      <Text style={styles.buttonText}>${amount}</Text>
    </TouchableOpacity>
  );
};

export const DollarButtonsRow = ({ onChange }) => {
  const handleAmountPress = (amount) => {
    // Handle button press with the selected amount
    console.log(`Button ${amount} pressed`);
    // Notify the parent component with the selected amount
    // You can perform any necessary actions here
    onChange(amount);
  };

  return (
    <View style={styles.container}>
      {[100, 200, 300, 400].map((amount) => (
        <DollarButton
          key={amount}
          amount={amount}
          onPress={handleAmountPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
