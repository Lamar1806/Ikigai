import React, { FC } from 'react';
import { StyleSheet, Text, View, Button } from '@ikigai/ui-components';

export interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: FC<LoginScreenProps> = () => {
  return (
    <View style={styles.LoginScreen}>
      <Text>Hello LoginScreen</Text>
      <Button title="ok" />
    </View>
  );
};

const styles = StyleSheet.create({
  LoginScreen: {},
});
