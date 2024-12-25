import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Item = {
  page: string;
  name: string;
  image: string;
};

interface Props {
  title: string;
  items: Item[];
}

export const HorizontalScrollableList = ({ title, items }: Props) => {
  const navigation = useNavigation();

  const handleItemPress = (item: Item) => {
    //@ts-ignore
    navigation.navigate(item.page, { item }); // Navigate to the item's page with its data
  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: 250,
  },
  itemImage: {
    width: 250,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    alignSelf: 'flex-start',
  },
});
