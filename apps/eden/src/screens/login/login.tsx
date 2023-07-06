import React from 'react';
import { ImageFullBg } from '@ikigai/ui-components';
import { View, Text, Button } from 'react-native';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login({ navigation }) {
  return (
    <View>
      <Text>Welcome To Eden</Text>
      <ImageFullBg />
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
      <Button title="Sign Out" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default Login;
