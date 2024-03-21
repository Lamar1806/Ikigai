import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { PillButton } from '../components/PillButton';
import { DollarButtonsRow } from '../components/DollarButtonsRow';

export const BuyCryptoScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [convertedToAmount] = useState(100);
  const coinName = 'USDC';

  const handleAmountChange = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Format as currency with two decimal places
    let formattedAmount = parseFloat(numericValue).toFixed(2);

    // Add thousand separators
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Set the state with the formatted currency value
    setAmount(formattedAmount);
  };

  const handleDollarButtonPress = (selectedAmount) => {
    // Update the state with the selected amount
    setAmount(selectedAmount.toString());
  };

  return (
    <View style={styles.container}>
      <PillButton
        title={'Ethereum'}
        style={styles.button}
        imageSource={undefined}
        onPress={undefined}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter amount"
          value={amount}
          onChangeText={handleAmountChange}
          editable={true}
          autoFocus={true}
        />
        <Text>{coinName}</Text>
        <FontAwesome5
          style={styles.exchangeIcon}
          name="exchange-alt"
          size={24}
          color="black"
        />
      </View>

      <Text style={styles.amountText}>
        {convertedToAmount} {coinName}
      </Text>

      <DollarButtonsRow onChange={handleDollarButtonPress} />

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentHeaderText}>Select Payment method</Text>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('Payment')}
        >
          <FontAwesome5
            style={styles.creditCardIcon}
            name="credit-card"
            size={24}
            color="black"
          />
          <Text style={styles.paymentButtonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: 200,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  exchangeIcon: {
    transform: [{ rotate: '90deg' }], // Rotate the icon by 90 degrees
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  amountText: {
    marginBottom: 15,
  },
  paymentContainer: {
    width: '100%',
    padding: 10,
  },
  paymentHeaderText: {
    marginBottom: 10,
  },
  paymentButton: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 15,
  },
  creditCardIcon: {
    marginRight: 10,
  },
  paymentButtonText: {
    top: 5,
  },
});
