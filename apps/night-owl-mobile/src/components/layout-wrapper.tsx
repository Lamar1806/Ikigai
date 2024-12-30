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
  showBottomNavBar?: boolean; // Optional prop to control the visibility of the bottom navbar
  useScrollView?: boolean; // Optional prop to control whether a ScrollView is used
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  style,
  showTopNavBar = true, // Default to true if not provided
  showBottomNavBar = true, // Default to true if not provided
  useScrollView = true, // Default to true if not provided
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.wrapper, style]}>
        {showTopNavBar && <TopNavBar />}
        {useScrollView ? (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {children}
          </ScrollView>
        ) : (
          <View style={styles.contentContainer}>{children}</View>
        )}
        {showBottomNavBar && <BottomNavbar />}
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
  contentContainer: {
    flex: 1, // Ensures the content container takes up the available space
    backgroundColor: 'white',
  },
});

export default LayoutWrapper;
