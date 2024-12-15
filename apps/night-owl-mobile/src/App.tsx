import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigation Container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack Navigator
import { SplashScreen } from './screens/splash-screen/splash-screen';
import { HomeScreen } from './screens/home-screen/home-screen';

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
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
