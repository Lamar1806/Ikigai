import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LayoutWrapper } from '../../components/layout-wrapper';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../../context/cart';

export interface MenuItemScreenProps {}

export function MenuItemScreen(props: MenuItemScreenProps) {
  const route = useRoute(); // Access the current route
  const navigation = useNavigation(); // Access the navigation object
  const { item } = route.params; // Retrieve the item from route params
  const { addItemToCart } = useContext(CartContext); // Access the addItemToCart method

  // State for managing extras, condiments, and quantity
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedCondiments, setSelectedCondiments] = useState<string[]>([]);

  // Dynamically set the screen title
  useEffect(() => {
    navigation.setOptions({
      title: item.name, // Set the title to the item name
    });
  }, [navigation, item]);

  // Handle quantity changes
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handle selection for extras or condiments
  const handleSelect = (type: 'extras' | 'condiments', name: string) => {
    if (type === 'extras') {
      setSelectedExtras((prev) =>
        prev.includes(name)
          ? prev.filter((extra) => extra !== name)
          : [...prev, name]
      );
    } else if (type === 'condiments') {
      setSelectedCondiments((prev) =>
        prev.includes(name)
          ? prev.filter((cond) => cond !== name)
          : [...prev, name]
      );
    }
  };

  // Handle adding the item to the cart
  const handleAddToCart = () => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      extras: selectedExtras,
      condiments: selectedCondiments,
    };
    addItemToCart(itemToAdd);
    // navigation.navigate('shoppingCartScreen'); // Redirect to the shopping cart after adding
  };

  // Calculate total price dynamically
  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <LayoutWrapper showTopNavBar={false}>
      <View style={styles.container}>
        {/* Image Section */}
        <Image
          source={{ uri: item.image || 'https://via.placeholder.com/300x200' }}
          style={styles.image}
        />

        {/* Description Section */}
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Quantity Section */}
        <View style={styles.quantityContainer}>
          <Text style={styles.subTitle}>Quantity</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={handleDecrement}
              style={styles.counterButton}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrement}
              style={styles.counterButton}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Extras Section */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Extras</Text>
          {(item.extras || []).map((extra: string) => (
            <View style={styles.optionContainer} key={extra}>
              <Text>{extra}</Text>
              <CheckBox
                value={selectedExtras.includes(extra)}
                onValueChange={() => handleSelect('extras', extra)}
              />
            </View>
          ))}
        </View>

        {/* Condiments Section */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Condiments</Text>
          {(item.condiments || []).map((condiment: string) => (
            <View style={styles.optionContainer} key={condiment}>
              <Text>{condiment}</Text>
              <CheckBox
                value={selectedCondiments.includes(condiment)}
                onValueChange={() => handleSelect('condiments', condiment)}
              />
            </View>
          ))}
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to Cart ${totalPrice}</Text>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  section: {
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
