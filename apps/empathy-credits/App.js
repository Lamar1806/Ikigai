import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { BottomTabNavigator } from './navigation/BottomTabNavigator'; // Import your BottomTabNavigator component
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <BottomTabNavigator />
        </View>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
