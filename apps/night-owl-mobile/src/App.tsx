import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigation Container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack Navigator
import { SplashScreen } from './screens/splash-screen/splash-screen';
import { HomeScreen } from './screens/home-screen/home-screen';
import { LoginOrSignUpScreen } from './screens/login-or-sign-up-screen/login-or-sign-up-screen';
import { LoginScreen } from './screens/login-screen/login-screen';
import { SignUpScreen } from './screens/sign-up-screen/sign-up-screen';
import { MenuItemScreen } from './screens/menu-item-screen/menu-item-screen';

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide the header for SplashScreen
        />
        {/* Home Screen */}
        <Stack.Screen
          name="loginOrSignUpScreen"
          component={LoginOrSignUpScreen}
          options={{ headerShown: false }}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* Sign Up Screen */}
        <Stack.Screen
          name="signUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        {/* Home Screen */}
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{ headerShown: false, headerTitle: 'Home' }}
        />
        {/* Menu Item */}
        <Stack.Screen
          name="menuItemScreen"
          component={MenuItemScreen}
          options={{ ...options }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerStyle: {
    backgroundColor: 'black', // Background color of the header
  },
  headerTintColor: 'white', // Text color of the header
  contentStyle: {
    backgroundColor: 'black', // Background color of the screen
  },
};
