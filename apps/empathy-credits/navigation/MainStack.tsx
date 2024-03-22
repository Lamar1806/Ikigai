import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import { WalletScreen } from '../pages/WalletScreen';
import { CoinDetailScreen } from '../pages/CoinDetailScreen';
import { SettingsScreen } from '../pages/Settings/SettingsScreen';
import { RecoverPhraseScreen } from '../pages/Settings/RecoverPhraseScreen';
import ChangePassCodeScreen from '../pages/Settings/ChangePassCodeScreen';
import { EnableFaceIdScreen } from '../pages/Settings/EnableFaceIdScreen';
import { Enable2FactorAuthenticationScreen } from '../pages/Settings/Enable2FactorAuthenticationScreen';
import { AutoAppLockScreen } from '../pages/Settings/AutoAppLockScreen';
import { ManageToensScreen } from '../pages/Settings/ManageToensScreen';
import { TransactionsScreen } from '../pages/Settings/TransactionsScreen';
import { ConnectedDAppsScreen } from '../pages/Settings/ConnectedDAppsScreen';
import { NetworksAndRPCScreen } from '../pages/Settings/NetworksAndRPCScreen';
import { DisplayCurrencyScreen } from '../pages/Settings/DisplayCurrencyScreen';
import { LanguageScreen } from '../pages/Settings/LanguageScreen';
import { NotificationsScreen } from '../pages/Settings/NotificationsScreen';
import { HelpCenterScreen } from '../pages/Settings/HelpCenterScreen';
import { NewToDeFiScreen } from '../pages/Settings/NewToDeFiScreen';
import { JoinCommunityScreen } from '../pages/Settings/JoinCommunityScreen';
import { GiveFeedbackScreen } from '../pages/Settings/GiveFeedbackScreen';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ headerShown: false }} // Hide the header for the home screen
      />
      <Stack.Screen name="CoinDetailScreen" component={CoinDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Recovery Phrase" component={RecoverPhraseScreen} />
      <Stack.Screen name="Change Passcode" component={ChangePassCodeScreen} />
      <Stack.Screen name="Enable FaceId" component={EnableFaceIdScreen} />
      <Stack.Screen
        name="Enable 2-Factor Authentication"
        component={Enable2FactorAuthenticationScreen}
      />
      <Stack.Screen name="Auto App Lock" component={AutoAppLockScreen} />
      <Stack.Screen name="Manage Tokens" component={ManageToensScreen} />
      <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} />
      <Stack.Screen name="Connected dApps" component={ConnectedDAppsScreen} />
      <Stack.Screen name="Networks & RPC" component={NetworksAndRPCScreen} />
      <Stack.Screen name="Approvals" component={DisplayCurrencyScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Help Center" component={HelpCenterScreen} />
      <Stack.Screen name="New to Defi" component={NewToDeFiScreen} />
      <Stack.Screen name="Join Community" component={JoinCommunityScreen} />
      <Stack.Screen name="Give Feedback" component={GiveFeedbackScreen} />
    </Stack.Navigator>
  );
};
