import { MenuItem } from '../mock-data/menu';

export type RootStackParamList = {
  aboutUsScreen: undefined;
  accountScreen: undefined;
  addPaymentMethodScreen: undefined;
  favoritesScreen: undefined;
  feedbackScreen: undefined;
  homeScreen: undefined;
  loginOrSignUpScreen: undefined;
  loginScreen: undefined;
  menuScreen: { category: 'Drinks' | 'Sides' | 'Add-ons' };
  qrCodeScreen: undefined;
  receiptScreen: undefined;
  shoppingCartItemScreen: undefined;
  shoppingCartScreen: undefined;
  signUpScreen: undefined;
  splashScreen: undefined;
  supportScreen: undefined;
  viewPaymentScreen: undefined;
  walletScreen: undefined;
  menuItemScreen: { item: MenuItem };
  receiptItemScreen: undefined;
};
