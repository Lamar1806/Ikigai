import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const TimeFrameSelector = ({ onSelect }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('1h');

  const timeFrames = [
    { label: '24hr', value: '24hr' },
    { label: '1w', value: '7' },
    { label: '1m', value: '30' },
    { label: '3m', value: '90' },
    { label: '1year', value: '365' },
    { label: 'All time', value: '1000' },
    // Add more time frame options as needed
  ];

  const handleTimeFrameChange = (timeFrame) => {
    setSelectedTimeFrame(timeFrame);
    onSelect(timeFrame); // Notify the parent component about the selected time frame
  };

  return (
    <View style={styles.container}>
      {timeFrames.map((frame) => (
        <TouchableOpacity
          key={frame.value}
          style={[
            styles.button,
            selectedTimeFrame === frame.value && styles.selectedButton,
          ]}
          onPress={() => handleTimeFrameChange(frame.value)}
        >
          <Text style={styles.buttonText}>{frame.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 5,
  },
  selectedButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  buttonText: {
    color: '#000',
    fontSize: 8,
  },
});
