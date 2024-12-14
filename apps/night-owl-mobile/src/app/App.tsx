import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Fonts } from '@ikigai/assets';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.text}>app</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: ''
    fontFamily: 'Lato Bold',
  },
});
