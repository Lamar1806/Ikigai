import React, { FC } from 'react';
import { StyleSheet, Text, View } from '@ikigai/ui-components';

export interface ViewImageProps {}

export const ViewImage: FC<ViewImageProps> = () => {
  return (
    <View styles={styles.ViewImage}>
      <Text>Hello ViewImage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewImage: {},
});
