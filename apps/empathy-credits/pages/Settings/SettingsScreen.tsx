import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import cryptoWallet from '../../assets/crytoWallet.png';
import { SettingsItem } from './Components/SettingsItem';

export const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWalletContainer}>
        <Image style={styles.walletImage} source={cryptoWallet} />
        <Text>Wallet 1</Text>
      </View>
      {/* Security */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Security</Text>
        <SettingsItem title={'Recovery Phrase'} subTitle={'NotBackedUp'} />
        <SettingsItem title="Change Passcode" subTitle="You're protected" />
        <SettingsItem title="Enable Face ID" subTitle="You're protected" />
        <SettingsItem
          title="Enable 2-Factor Authentication"
          subTitle="Add an extra layer of security"
        />
        <SettingsItem
          title="Auto App Lock"
          subTitle="Auto-lock after 1 minute"
        />
      </View>
      {/* Assets */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Assets</Text>
        <SettingsItem title="Manage Tokens" subTitle="" />
        <SettingsItem title="Transaction History" subTitle="" />
      </View>
      {/* Web3 Connection */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Web3 Connection</Text>
        <SettingsItem title="Connected dApps" subTitle="" />
        <SettingsItem title="Networks & RPC" subTitle="" />
        <SettingsItem title="Approvals" subTitle="" />
      </View>
      {/* Account */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Account</Text>
        <SettingsItem title="Display Currency" subTitle="" />
        <SettingsItem title="Language" subTitle="" />
        <SettingsItem title="Notifications" subTitle="" />
      </View>
      {/* Support */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Support</Text>
        <SettingsItem title="Help Center" subTitle="" />
        <SettingsItem title="New to DeFi" subTitle="" />
        <SettingsItem title="Join Community" subTitle="" />
        <SettingsItem title="Give Feedback" subTitle="" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageWalletContainer: {
    width: '100%',
    alignItems: 'center',
  },
  walletImage: {
    marginRight: 5,
    height: 75,
    width: 75,
    marginBottom: 10,
  },
  sectionContainer: { padding: 16, marginTop: 16 },
  sectionHeader: {},
});
