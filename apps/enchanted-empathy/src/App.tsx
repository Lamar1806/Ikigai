// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home-screen/home-screen';
import { Counter } from './screens/counter/counter';
import store from './state/store.js';
import { Provider } from 'react-redux';
import { SignupOrLoginScreen } from './screens/login-or-signup/login-or-signup';
import { LoginScreen } from './screens/login-screen/LoginScreen';
import { SignupScreen } from './screens/signup-screen/signup-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignupOrLoginScreen">
          <Stack.Screen
            name="SignupOrLoginScreen"
            component={SignupOrLoginScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="Settings" component={Settings} /> */}
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="ChatList" component={ChatList} /> */}
          {/* <Stack.Screen name="ChatView" component={ChatView} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
