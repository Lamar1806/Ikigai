import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { TopNavBar } from '../components/top-nav-bar';
import { BottomNavbar } from '../components/bottom-nav-bar';

interface LayoutWrapperProps {
  children: React.ReactNode;
  style?: object; // Optional additional styling for the main container
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, style]}>
          <TopNavBar />
          {children}
          <BottomNavbar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
