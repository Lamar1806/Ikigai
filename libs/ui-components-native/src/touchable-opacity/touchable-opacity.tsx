import React from 'react';
import {
  TouchableOpacity as TouchableOpacityNative,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonWrapperProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  children,
  ...props
}) => {
  return <TouchableOpacityNative {...props}>{children}</TouchableOpacityNative>;
};

export default ButtonWrapper;
