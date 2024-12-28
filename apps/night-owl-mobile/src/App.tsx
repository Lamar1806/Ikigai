import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Navigation Container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Stack Navigator
import { SplashScreen } from './screens/splash-screen/splash-screen';
import { HomeScreen } from './screens/home-screen/home-screen';
import { LoginOrSignUpScreen } from './screens/login-or-sign-up-screen/login-or-sign-up-screen';
import { LoginScreen } from './screens/login-screen/login-screen';
import { SignUpScreen } from './screens/sign-up-screen/sign-up-screen';
import { MenuItemScreen } from './screens/menu-item-screen/menu-item-screen';
import { AboutUsScreen } from './screens/about-us-screen/about-us-screen';
import { AccountScreen } from './screens/account-screen/account-screen';
import { AddPaymentMethodScreen } from './screens/add-payment-method-screen/add-payment-method-screen';
import { FavoritesScreen } from './screens/favorites-screen/favorites-screen';
import { FeedbackScreen } from './screens/feedback-screen/feedback-screen';
import { MenuScreen } from './screens/menu-screen/menu-screen';
import { QrCodeScreen } from './screens/qr-code-screen/qr-code-screen';
import { ReceiptScreen } from './screens/receipt-screen/receipt-screen';
import { ShoppingCartScreen } from './screens/shopping-cart-screen/shopping-cart-screen';
import { ShoppingCartItemScreen } from './screens/shopping-cart-item-screen/shopping-cart-item-screen';
import { SupportScreen } from './screens/support-screen/support-screen';
import { ViewPaymentScreen } from './screens/view-payment-screen/view-payment-screen';
import { WalletScreen } from './screens/wallet-screen/wallet-screen';
import theme from '@ikigai/theme';

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
        {/* Login or Sign Up Screen */}
        <Stack.Screen
          name="LoginOrSignUp"
          component={LoginOrSignUpScreen}
          options={{ headerShown: false }}
        />
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...optionsForAuth, headerTitle: 'Login' }}
        />
        {/* Sign Up Screen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ ...optionsForAuth, headerTitle: 'Sign Up' }}
        />
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, headerTitle: 'Home' }}
        />
        {/* Menu Item Screen */}
        <Stack.Screen
          name="MenuItem"
          component={MenuItemScreen}
          options={{ ...options }}
        />
        {/* About Us Screen */}
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ headerTitle: 'About Us' }}
        />
        {/* Account Screen */}
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerTitle: 'Account' }}
        />
        {/* Add Payment Method Screen */}
        <Stack.Screen
          name="AddPaymentMethod"
          component={AddPaymentMethodScreen}
          options={{ headerTitle: 'Add Payment Method' }}
        />
        {/* Favorites Screen */}
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ headerTitle: 'Favorites' }}
        />
        {/* Feedback Screen */}
        <Stack.Screen
          name="Feedback"
          component={FeedbackScreen}
          options={{ headerTitle: 'Feedback' }}
        />
        {/* Menu Screen */}
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerTitle: 'Menu' }}
        />
        {/* QR Code Screen */}
        <Stack.Screen
          name="QRCode"
          component={QrCodeScreen}
          options={{ headerTitle: 'QR Code' }}
        />
        {/* Receipt Screen */}
        <Stack.Screen
          name="Receipt"
          component={ReceiptScreen}
          options={{ headerTitle: 'Receipt' }}
        />
        {/* Shopping Cart Screen */}
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ headerTitle: 'Shopping Cart' }}
        />
        {/* Shopping Cart Item Screen */}
        <Stack.Screen
          name="ShoppingCartItem"
          component={ShoppingCartItemScreen}
          options={{ headerTitle: 'Cart Item' }}
        />
        {/* Support Screen */}
        <Stack.Screen
          name="Support"
          component={SupportScreen}
          options={{ headerTitle: 'Support' }}
        />
        {/* View Payment Screen */}
        <Stack.Screen
          name="ViewPayment"
          component={ViewPaymentScreen}
          options={{ headerTitle: 'View Payment' }}
        />
        {/* Wallet Screen */}
        <Stack.Screen
          name="Wallet"
          component={WalletScreen}
          options={{ headerTitle: 'Wallet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const optionsForAuth = {
  headerStyle: {
    backgroundColor: theme.colors.black, // Background color of the header
  },
  headerTintColor: theme.colors.white, // Text color of the header
};

const options = {
  headerStyle: {
    backgroundColor: theme.colors.black, // Background color of the header
  },
  headerTintColor: theme.colors.yellow, // Text color of the header
  contentStyle: {
    backgroundColor: theme.colors.black, // Background color of the screen
  },
};
