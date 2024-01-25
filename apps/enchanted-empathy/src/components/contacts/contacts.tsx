import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  PermissionStatus,
} from 'react-native';
import Contacts from 'react-native-contacts';

export const InviteContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    requestContactsPermission();
  }, []);

  const requestContactsPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'App needs access to your contacts.',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          loadContacts();
        } else {
          console.warn('Contacts permission denied');
        }
      } else if (Platform.OS === 'ios') {
        const permission = await Contacts.checkPermission();
        if (permission !== PermissionStatus.AUTHORIZED) {
          Contacts.requestPermission((err, permission) => {
            if (permission === PermissionStatus.AUTHORIZED) {
              loadContacts();
            } else {
              console.warn('Contacts permission denied');
            }
          });
        }

        if (permission === PermissionStatus.AUTHORIZED) {
          loadContacts();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadContacts = () => {
    Contacts.getAll()
      .then((allContacts) => {
        setContacts(allContacts);
      })
      .catch((error) => console.error(error));
  };

  const inviteContact = (contact) => {
    // Implement your invitation logic here
    console.log(`Invite ${contact.displayName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Invite Contacts</Text>
      {contacts.map((contact) => (
        <TouchableOpacity
          key={contact.recordID}
          style={styles.contactItem}
          onPress={() => inviteContact(contact)}
        >
          <Text style={styles.contactText}>{contact.displayName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  contactText: {
    color: 'white',
    fontSize: 16,
  },
});
