import React, { FC } from 'react';

import {
  Image as ImageNative,
  ImageProps as ImageNativeProps,
  StyleSheet,
} from 'react-native';

/* eslint-disable-next-line */
interface ImageProps extends ImageNativeProps {
  style: ImageNativeProps['style'];
}

export const Image: FC<ImageProps> = ({ style, ...rest }) => {
  const combinedStyles = StyleSheet.flatten([styles.image, style]);
  return <ImageNative style={combinedStyles} {...rest} />;
};

const styles = StyleSheet.create({
  image: {},
});

export default Image;
