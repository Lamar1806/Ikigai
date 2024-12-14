import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import styled from '@emotion/native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.text}>Night Owl</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lavishly Yours',
  },
});
