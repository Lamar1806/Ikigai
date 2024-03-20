import React, { useEffect } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const AnimatedExample = () => {
  const animatedValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // Enable this option for better performance
    }).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)'],
  });

  const animatedStyle = {
    backgroundColor: interpolateColor,
    width: 100,
    height: 100,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
});

export default AnimatedExample;
