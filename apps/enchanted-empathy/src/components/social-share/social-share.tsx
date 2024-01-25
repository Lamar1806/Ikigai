import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';

export const SocialShare = () => {
  const shareOnFacebook = async () => {
    try {
      const shareOptions = {
        social: Share.Social.FACEBOOK,
        message: 'Check out this amazing app!',
      };

      await Share.shareSingle(shareOptions);
    } catch (error) {
      console.error(error.message);
    }
  };

  const shareOnSnapchat = async () => {
    try {
      const shareOptions = {
        social: Share.Social.SNAPCHAT,
        message: 'Check out this amazing app!',
      };

      await Share.shareSingle(shareOptions);
    } catch (error) {
      console.error(error.message);
    }
  };

  const shareOnInstagram = async () => {
    try {
      const shareOptions = {
        social: Share.Social.INSTAGRAM,
        message: 'Check out this amazing app!',
      };

      await Share.shareSingle(shareOptions);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Social Share</Text>
      <TouchableOpacity style={styles.button} onPress={shareOnFacebook}>
        <Text style={styles.buttonText}>Share on Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={shareOnSnapchat}>
        <Text style={styles.buttonText}>Share on Snapchat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={shareOnInstagram}>
        <Text style={styles.buttonText}>Share on Instagram</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
