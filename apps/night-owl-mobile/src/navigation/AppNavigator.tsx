import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../screens/splash-screen/splash-screen';
import { HomeScreen } from '../screens/home-screen/home-screen';
import { LoginOrSignUpScreen } from '../screens/login-or-sign-up-screen/login-or-sign-up-screen';
import { LoginScreen } from '../screens/login-screen/login-screen';
import { SignUpScreen } from '../screens/sign-up-screen/sign-up-screen';
import { MenuItemScreen } from '../screens/menu-item-screen/menu-item-screen';
import { AboutUsScreen } from '../screens/about-us-screen/about-us-screen';
import { AccountScreen } from '../screens/account-screen/account-screen';
import { AddPaymentMethodScreen } from '../screens/add-payment-method-screen/add-payment-method-screen';
import { FavoritesScreen } from '../screens/favorites-screen/favorites-screen';
import { FeedbackScreen } from '../screens/feedback-screen/feedback-screen';
import { MenuScreen } from '../screens/menu-screen/menu-screen';
import { QrCodeScreen } from '../screens/qr-code-screen/qr-code-screen';
import { ReceiptScreen } from '../screens/receipt-screen/receipt-screen';
import { ShoppingCartScreen } from '../screens/shopping-cart-screen/shopping-cart-screen';
import { ShoppingCartItemScreen } from '../screens/shopping-cart-item-screen/shopping-cart-item-screen';
import { SupportScreen } from '../screens/support-screen/support-screen';
import { ViewPaymentScreen } from '../screens/view-payment-screen/view-payment-screen';
import { WalletScreen } from '../screens/wallet-screen/wallet-screen';
import { ReceiptItemScreen } from '../screens/receipt-item-screen/receipt-item-screen';
import type { RootStackParamList } from '../types/RootStackParamList';
import theme from '@ikigai/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const optionsForAuth = {
    headerStyle: {
      backgroundColor: theme.colors.black,
    },
    headerTintColor: theme.colors.white,
  };

  const options = {
    headerStyle: {
      backgroundColor: theme.colors.black,
    },
    headerTintColor: theme.colors.yellow,
    contentStyle: {
      backgroundColor: theme.colors.black,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="loginOrSignUpScreen"
          component={LoginOrSignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{ ...optionsForAuth, headerTitle: 'Login' }}
        />
        <Stack.Screen
          name="signUpScreen"
          component={SignUpScreen}
          options={{ ...optionsForAuth, headerTitle: 'Sign Up' }}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{ headerShown: false, headerTitle: 'Home' }}
        />
        <Stack.Screen
          name="menuItemScreen"
          component={MenuItemScreen}
          options={{ ...options }}
        />
        <Stack.Screen
          name="aboutUsScreen"
          component={AboutUsScreen}
          options={{ headerTitle: 'About Us' }}
        />
        <Stack.Screen
          name="accountScreen"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addPaymentMethodScreen"
          component={AddPaymentMethodScreen}
          options={{ headerTitle: 'Add Payment Method' }}
        />
        <Stack.Screen
          name="favoritesScreen"
          component={FavoritesScreen}
          options={{ headerTitle: 'Favorites' }}
        />
        <Stack.Screen
          name="feedbackScreen"
          component={FeedbackScreen}
          options={{ headerTitle: 'Feedback' }}
        />
        <Stack.Screen
          name="menuScreen"
          component={MenuScreen}
          options={{ headerShown: false, headerTitle: 'Menu' }}
        />
        <Stack.Screen
          name="qrCodeScreen"
          component={QrCodeScreen}
          options={{ headerTitle: 'QR Code' }}
        />
        <Stack.Screen
          name="receiptScreen"
          component={ReceiptScreen}
          options={{ headerShown: false, headerTitle: 'Receipts' }}
        />
        <Stack.Screen
          name="receiptItemScreen"
          component={ReceiptItemScreen}
          options={{ ...options, headerTitle: 'Receipt Details' }}
        />
        <Stack.Screen
          name="shoppingCartScreen"
          component={ShoppingCartScreen}
          options={{ ...options, headerTitle: 'Shopping Cart' }}
        />
        <Stack.Screen
          name="shoppingCartItemScreen"
          component={ShoppingCartItemScreen}
          options={{ headerTitle: 'Cart Item' }}
        />
        <Stack.Screen
          name="supportScreen"
          component={SupportScreen}
          options={{ headerTitle: 'Support' }}
        />
        <Stack.Screen
          name="viewPaymentScreen"
          component={ViewPaymentScreen}
          options={{ headerTitle: 'View Payment' }}
        />
        <Stack.Screen
          name="walletScreen"
          component={WalletScreen}
          options={{ headerTitle: 'Wallet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;