import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { BottomTabNavigator } from './navigation/BottomTabNavigator'; // Import your BottomTabNavigator component
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { store } from './redux/store';
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <BottomTabNavigator />
          </View>
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
