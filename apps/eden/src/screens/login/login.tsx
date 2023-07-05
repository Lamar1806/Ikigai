import React from 'react';
import { ImageFullBg } from '@ikigai/ui-components';
import { View, Text, Button } from 'react-native';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login({ navigation }) {
  return (
    <View>
      <Text>Welcome to login!</Text>
      <ImageFullBg />
      <Button title="Go To" onPress={() => navigation.navigate('Counter')} />
    </View>
  );
}

export default Login;
