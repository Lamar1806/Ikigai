import { MenuItem } from '../mock-data/menu';

export type RootStackParamList = {
  // Splash Screen
  splashScreen: undefined;

  // Authentication
  loginOrSignUpScreen: undefined;
  loginScreen: undefined;
  signUpScreen: undefined;

  // Main Features
  homeScreen: undefined;
  menuScreen: undefined;
  menuItemScreen: { item: MenuItem };
  favoritesScreen: undefined;
  shoppingCartScreen: undefined;
  shoppingCartItemScreen: undefined;
  receiptScreen: undefined;
  receiptItemScreen: undefined;

  // Payment Screens
  walletScreen: undefined;
  addPaymentMethodScreen: undefined;
  viewPaymentMethodScreen: undefined;
  editPaymentMethodScreen: undefined;

  // Account and Support
  accountScreen: undefined;
  feedbackScreen: undefined;
  supportScreen: undefined;
  aboutUsScreen: undefined;

  // Other
  qrCodeScreen: undefined;
};
