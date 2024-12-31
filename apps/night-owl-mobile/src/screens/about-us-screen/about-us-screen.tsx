/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AboutImage from '../../assets/owl.jpg';
import ShareIcon from '../../assets/share.svg';

export const AboutUsScreen = () => {
  const handleShare = () => {
    // Implement share functionality
    console.log('Share button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={AboutImage} style={styles.imageBackground}>
        {/* Overlay */}
        <View style={styles.overlay} />
        {/* Text Content */}
        <Text style={styles.headerText}>About us</Text>
      </ImageBackground>

      {/* About Section */}
      <View style={styles.content}>
        <Text style={styles.title}>About Night Owl</Text>
        <Text style={styles.description}>
          At Night Owl, we’re all about serving delicious, late-night bites that
          satisfy your cravings when you need them most. Founded by Aaron and
          Echo, we bring fresh, flavorful food right to your event or location
          with our mobile catering service. Whether you’re hosting a party,
          event, or just in the mood for great food on the go, Night Owl is here
          to deliver top-tier cuisine with a personal touch.
        </Text>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <ShareIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Ensures the overlay covers the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  headerText: {
    fontSize: 48,
    color: 'gold',
    fontFamily: 'Lavishly Yours', // Replace with your custom font if needed
    zIndex: 1, // Ensures the text appears above the overlay
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  shareButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
