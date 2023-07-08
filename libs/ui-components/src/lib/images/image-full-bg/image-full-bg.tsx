import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from '../../images/image/image';
import { View } from '../../view/view';

/* eslint-disable-next-line */
export interface ImageFullBgProps {}

export function ImageFullBg(props: ImageFullBgProps) {
  const styles = StyleSheet.flatten([]);
  return (
    <View>
      <Image style={false} source={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  ImageFullBg: {},
});

export default ImageFullBg;
