import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the params for each screen
export type RootStackParamList = {
  SignupOrLoginScreen: undefined;
  Login: undefined;
  SignupScreen: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  // Add other screens here as needed
};

// Define the navigation prop for each screen
export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

// Example usage in a component
// import { NavigationProps } from './types';
// const MyComponent: React.FC<NavigationProps<'Login'>> = ({ navigation, route }) => {
//   // Component logic here
// };
