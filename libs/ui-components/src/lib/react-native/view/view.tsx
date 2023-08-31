import React, { FC } from 'react';

import {
  StyleSheet,
  View as ViewNative,
  ViewProps as ViewNativeProps,
} from 'react-native';

/* eslint-disable-next-line */
export interface ViewProps extends ViewNativeProps {
  style?: ViewNativeProps['style'];
}

export const View: FC<ViewProps> = ({ style, children, ...rest }) => {
  const combinedStyles = StyleSheet.flatten([styles.view, style]);
  return (
    <ViewNative style={combinedStyles} {...rest}>
      {children}
    </ViewNative>
  );
};

const styles = StyleSheet.create({
  view: {},
});
