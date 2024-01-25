import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { InviteContacts } from '../../components/contacts/contacts';
import { SocialShare } from '../../components/social-share/social-share';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enchanted Messaging</Text>
      </View>
      <View style={styles.emptySection}>
        <Text style={styles.emptyText}>Start a magical conversation!</Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </TouchableOpacity>

        {/* <InviteContacts></InviteContacts> */}
        <SocialShare></SocialShare>
      </View>
      {/* Additional sections or components can be added here */}
    </View>
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
