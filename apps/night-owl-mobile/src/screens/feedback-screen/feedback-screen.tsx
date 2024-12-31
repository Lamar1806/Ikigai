import { BackgroundImage } from '@ikigai/ui-components-native';
import BreakfastImage from '../../assets/breakfast.png';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate';
import theme from '@ikigai/theme';

export const FeedbackScreen = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const emojis = ['☹️', '😕', '😐', '😊', '😀'];

  const handleReviewSubmission = () => {
    if (selectedEmoji === null) {
      Alert.alert('Error', 'Please select an emoji.');
      return;
    }

    const options = {
      AppleAppID: 'your_ios_app_id', // Replace with your iOS App Store ID
      GooglePackageName: 'com.yourapp.package', // Replace with your Android package name
      AmazonPackageName: 'com.yourapp.package', // Optional for Amazon App Store
      OtherAndroidURL:
        'https://play.google.com/store/apps/details?id=com.yourapp.package', // Fallback URL
      preferInApp: true, // Whether to use the in-app rating dialog (iOS only)
      openAppStoreIfInAppFails: true, // Fallback to app store if in-app dialog fails (iOS only)
    };

    Rate.rate(options, (success: boolean) => {
      if (success) {
        Alert.alert('Thank you!', 'Your feedback is greatly appreciated.');
      } else {
        Alert.alert('Feedback Not Submitted', 'Try again later.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <BackgroundImage
        source={BreakfastImage}
        style={{ padding: 20 }}
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <Text style={styles.title}>Night Owl</Text>
        {/* Emoji Rating */}
        <View style={styles.emojiContainer}>
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedEmoji(index)}
              style={[
                styles.emojiButton,
                selectedEmoji === index && styles.selectedEmoji,
              ]}
            >
              <Text style={styles.emojiText}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Comment Box */}
        <TextInput
          style={styles.commentBox}
          placeholder="Add a Comment..."
          placeholderTextColor="#999"
          value={comment}
          onChangeText={setComment}
          multiline
        />

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleReviewSubmission}
        >
          <Text style={styles.submitText}>Submit Now</Text>
        </TouchableOpacity>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: theme.colors.yellow,
    marginBottom: 40,
    fontFamily: 'Lavishly Yours', // Use your custom font if needed
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  emojiButton: {
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 0, // No outline by default
  },
  selectedEmoji: {
    borderWidth: 2, // White outline when selected
    borderColor: 'white',
  },
  emojiText: {
    fontSize: 24,
    color: 'white', // White text for emojis
  },
  commentBox: {
    width: '100%',
    height: 100,
    borderWidth: 1, // White outline
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'transparent', // Transparent background
    textAlignVertical: 'top',
    marginBottom: 20,
    color: 'white', // White text
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent', // Transparent background
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // White outline
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // White text
  },
});
