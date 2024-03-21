import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  StyleSheet,
} from 'react-native';

export const SlideUpModal = ({ visible, onClose, children }) => {
  const [animation] = useState(new Animated.Value(0));

  React.useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.scrollViewContent}>{children}</View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0, // Adjust bottom position as needed
    left: 0,
    right: 0,
    maxHeight: '70%', // Set a maximum height for the modal
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  scrollViewContent: {
    height: 600,
    paddingBottom: 20, // Adjust as needed to avoid content being hidden behind the modal's padding
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
