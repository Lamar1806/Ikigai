import React from 'react';
import { StatusBar as StatusBarNative, Platform } from 'react-native';

export const StatusBar = ({
  barStyle = 'dark-content',
  backgroundColor = 'transparent',
  hidden = false,
}) => {
  return (
    <StatusBarNative
      // barStyle={barStyle}
      backgroundColor={backgroundColor}
      hidden={hidden}
      translucent={Platform.OS === 'android'}
    />
  );
};
