import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EditIcon from '../../assets/edit.svg'; // Replace with your actual Edit icon path
import RemoveIcon from '../../assets/cancel.svg'; // Replace with your actual Remove icon path
import CardIcon from '../../assets/card.svg'; // Replace with your actual toggle switch icon path

export const ViewPaymentMethodScreen = () => {
  const [isDefault, setIsDefault] = useState(false);

  const toggleDefault = () => setIsDefault((prevState) => !prevState);

  const handleEdit = () => {
    console.log('Edit button pressed');
  };

  const handleRemove = () => {
    console.log('Remove button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.cardTitle}>Mastercard</Text>
          <TouchableOpacity onPress={toggleDefault}>
            <CardIcon
              width={32}
              height={32}
              fill={isDefault ? '#000' : '#ccc'} // Adjust based on active/inactive state
            />
          </TouchableOpacity>
        </View>

        {/* Card Details */}
        <Text style={styles.cardDetails}>••• 1234</Text>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
            <EditIcon width={16} height={16} fill="#000" />
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleRemove}>
            <RemoveIcon width={16} height={16} fill="#000" />
            <Text style={styles.actionText}>Remove payment Method</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
});

export default ViewPaymentMethodScreen;
