import React, { FC } from 'react';

import { Button as ButtonNative } from 'react-native';
import { ButtonProps as ButtonNativeProps } from 'react-native/Libraries/Components/Button';

export const Button: FC<ButtonNativeProps> = ({ title, onPress, ...rest }) => {
  return <ButtonNative title={title} onPress={onPress} {...rest} />;
};

export default Button;
