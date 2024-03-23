import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export const DownChevronIcon = ({ size = 24, color = 'black', ...props }) => {
  return (
    <FontAwesome5 name="chevron-down" size={size} color={color} {...props} />
  );
};
