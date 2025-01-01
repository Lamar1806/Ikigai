import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

interface ImageHeaderProps {
  imageSource: any; // The image source, can be a URL or local image
  title: string; // The title text
  fontFamily?: string; // Optional font family
  titleStyle?: StyleProp<TextStyle>; // Optional additional styles for the title
}

export const ImageHeader: React.FC<ImageHeaderProps> = ({
  imageSource,
  title,
  fontFamily = 'Lavishly Yours',
  titleStyle,
}) => {
  return (
    <View style={styles.header}>
      <Image source={imageSource} style={styles.headerImage} />
      <View style={styles.overlay} />
      <Text style={[styles.title, { fontFamily }, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Black overlay with 60% opacity
  },
  title: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Gold color for text
  },
});
