import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import theme from '@ikigai/theme';

interface LocationModalProps {
  visible: boolean;
  locations: string[];
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  visible,
  locations,
  onSelectLocation,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a Location</Text>
          <FlatList
            data={locations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={styles.locationItem}
                onPress={() => onSelectLocation(item)}
              >
                <Text style={styles.locationText}>{item}</Text>
              </Pressable>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  locationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: theme.colors.black,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: theme.colors.yellow,
    fontWeight: 'bold',
  },
});
