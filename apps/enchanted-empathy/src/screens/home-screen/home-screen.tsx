import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SocialShare } from '../../components/social-share/social-share';
import { Modal, PaperProvider, Portal, Button } from 'react-native-paper';

export const HomeScreen = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Enchanted Messaging</Text>
        </View>
        <View style={styles.emptySection}>
          <Text style={styles.emptyText}>Start a magical conversation!</Text>
          <SocialShare
            style={styles.inviteButton}
            textStyle={styles.buttonText}
            text={'Invite Friends'}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set your background color
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: 'white', // Set your text color
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptySection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  inviteButton: {
    backgroundColor: 'red', // Set your button color
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
