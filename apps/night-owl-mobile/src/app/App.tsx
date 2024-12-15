import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Navigation Container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack Navigator
import styled from '@emotion/native';

// Screens
const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <StyledText>Night Owl</StyledText>
  </SafeAreaView>
);

const DetailsScreen = () => (
  <SafeAreaView style={styles.container}>
    <StyledText>Details Screen</StyledText>
  </SafeAreaView>
);

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        {/* Details Screen */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styled Components
const StyledText = styled.Text`
  font-family: 'Lavishly Yours';
  font-size: 24px;
  color: #333;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
