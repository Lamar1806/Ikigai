import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TopNavBar } from '../components/top-nav-bar';
import { BottomNavbar } from '../components/bottom-nav-bar';

interface LayoutWrapperProps {
  children: React.ReactNode;
  style?: object; // Optional additional styling for the main container
  showTopNavBar?: boolean; // Optional prop to control the visibility of the top navbar
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  style,
  showTopNavBar = true, // Default to true if not provided
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        {showTopNavBar && <TopNavBar />}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {children}
        </ScrollView>
        <BottomNavbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView fills available space
    minHeight: Dimensions.get('window').height, // Minimum height of the ScrollView is the device height
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
