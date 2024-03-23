import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export const SettingsItem = ({ title, subTitle }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <FontAwesome5
        style={styles.chevron}
        name="chevron-right"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  chevron: {
    marginLeft: 10,
  },
});
