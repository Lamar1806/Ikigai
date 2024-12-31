export type MenuItem = {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  spicy: boolean;
  vegetarian: boolean;
  price: number;
  image?: string; // Optional if you don't have images for all items
};

export type MenuCategory = {
  coffee: MenuItem[];
  milk: MenuItem[];
  creamer: MenuItem[];
  otherDrinks: MenuItem[];
  food: MenuItem[];
  mealDeals: MenuItem[];
  addOns: MenuItem[];
  packets: MenuItem[];
  holidayAddOns: MenuItem[];
  cookingIngredients: MenuItem[];
};

//prettier-ignore
export const menu: MenuCategory = {
  coffee: [
      { id: 0, name: "Vanilla Latte", description: "", ingredients: ["espresso", "vanilla syrup", "milk"], spicy: false, vegetarian: true, price: 4.5 },
      { id: 1, name: "Caramel Latte", description: "", ingredients: ["espresso", "caramel syrup", "milk"], spicy: false, vegetarian: true, price: 4.5 },
      { id: 2, name: "Mocha Latte", description: "", ingredients: ["espresso", "chocolate syrup", "milk"], spicy: false, vegetarian: true, price: 4.5 },
      { id: 3, name: "Vanilla Frappuccino", description: "", ingredients: ["espresso", "vanilla syrup", "ice"], spicy: false, vegetarian: true, price: 5.0 },
      { id: 4, name: "Caramel Frappuccino", description: "", ingredients: ["espresso", "caramel syrup", "ice"], spicy: false, vegetarian: true, price: 5.0 },
      { id: 5, name: "Mocha Frappuccino", description: "", ingredients: ["espresso", "chocolate syrup", "ice"], spicy: false, vegetarian: true, price: 5.0 },
      { id: 6, name: "Hot Coffee", description: "", ingredients: ["coffee"], spicy: false, vegetarian: true, price: 3.0 },
      { id: 7, name: "Ice Coffee", description: "", ingredients: ["coffee", "ice"], spicy: false, vegetarian: true, price: 3.0 }
  ],
  milk: [
      { id: 0, name: "Oat Milk", description: "", ingredients: ["oat milk"], spicy: false, vegetarian: true, price: 0.5 },
      { id: 1, name: "2% Milk", description: "", ingredients: ["2% milk"], spicy: false, vegetarian: true, price: 0.5 }
  ],
  creamer: [
      { id: 0, name: "Oatmilk Mocha", description: "", ingredients: ["oat milk", "chocolate syrup"], spicy: false, vegetarian: true, price: 0.5 },
      { id: 1, name: "Oatmilk Vanilla", description: "", ingredients: ["oat milk", "vanilla syrup"], spicy: false, vegetarian: true, price: 0.5 },
      { id: 2, name: "Oatmilk Caramel", description: "", ingredients: ["oat milk", "caramel syrup"], spicy: false, vegetarian: true, price: 0.5 }
  ],
  otherDrinks: [
      { id: 0, name: "Tea (Black)", description: "", ingredients: ["tea"], spicy: false, vegetarian: true, price: 2.5 },
      { id: 1, name: "Tea (Green)", description: "", ingredients: ["tea"], spicy: false, vegetarian: true, price: 2.5 },
      { id: 2, name: "OJ Bottles", description: "", ingredients: ["orange juice"], spicy: false, vegetarian: true, price: 3.0 },
      { id: 3, name: "Water Bottles", description: "", ingredients: ["water"], spicy: false, vegetarian: true, price: 2.0 }
  ],
  food: [
      { id: 0, name: "Fruit Bowl", description: "Assorted fresh fruits", ingredients: [], spicy: false, vegetarian: true, price: 5.0 },
      { id: 1, name: "Hashbrowns", description: "", ingredients: ["potato"], spicy: false, vegetarian: true, price: 2.5 },
      { id: 2, name: "Toast", description: "", ingredients: ["bread"], spicy: false, vegetarian: true, price: 1.5 },
      { id: 3, name: "Tortilla", description: "", ingredients: ["flour"], spicy: false, vegetarian: true, price: 1.0 },
      { id: 4, name: "Waffles", description: "", ingredients: ["flour", "eggs", "milk"], spicy: false, vegetarian: true, price: 4.0 },
      { id: 5, name: "Pancakes", description: "", ingredients: ["flour", "eggs", "milk"], spicy: false, vegetarian: true, price: 3.5 },
      { id: 6, name: "Eggs", description: "", ingredients: ["egg"], spicy: false, vegetarian: false, price: 2.5 },
      { id: 7, name: "Chorizo", description: "", ingredients: ["chorizo"], spicy: true, vegetarian: false, price: 3.0 },
      { id: 8, name: "Sausage", description: "", ingredients: ["sausage"], spicy: false, vegetarian: false, price: 3.0 },
      { id: 9, name: "Bacon", description: "", ingredients: ["bacon"], spicy: false, vegetarian: false, price: 3.0 },
      { id: 10, name: "Bologna", description: "", ingredients: ["bologna"], spicy: false, vegetarian: false, price: 2.5 }
  ],
  mealDeals: [
      { id: 0, name: "Breakfast Burrito", description: "", ingredients: ["tortilla", "egg", "meat"], spicy: false, vegetarian: false, price: 5.0 },
      { id: 1, name: "Breakfast Plate", description: "Pick 3: meat, side, egg", ingredients: ["meat", "hashbrowns", "egg"], spicy: false, vegetarian: false, price: 7.5 }
  ],
  addOns: [
      { id: 0, name: "Cheese", description: "", ingredients: ["cheese"], spicy: false, vegetarian: true, price: 0.5 },
      { id: 1, name: "Avocado", description: "", ingredients: ["avocado"], spicy: false, vegetarian: true, price: 1.0 },
      { id: 2, name: "Onions", description: "", ingredients: ["onions"], spicy: false, vegetarian: true, price: 0.5 },
      { id: 3, name: "Bell Pepper", description: "", ingredients: ["bell pepper"], spicy: false, vegetarian: true, price: 0.5 }
  ],
  packets: [
      { id: 0, name: "Hot Sauce", description: "", ingredients: [], spicy: true, vegetarian: true, price: 0.0 },
      { id: 1, name: "Ketchup", description: "", ingredients: [], spicy: false, vegetarian: true, price: 0.0 },
      { id: 2, name: "Mayo", description: "", ingredients: [], spicy: false, vegetarian: true, price: 0.0 },
      { id: 3, name: "Mustard", description: "", ingredients: [], spicy: false, vegetarian: true, price: 0.0 },
      { id: 4, name: "Jelly", description: "", ingredients: [], spicy: false, vegetarian: true, price: 0.0 },
      { id: 5, name: "Syrup", description: "", ingredients: [], spicy: false, vegetarian: true, price: 0.0 }
  ],
  holidayAddOns: [
      { id: 0, name: "Pumpkin Spice", description: "Seasonal flavor", ingredients: [], spicy: false, vegetarian: true, price: 0.5 },
      { id: 1, name: "Peppermint", description: "Seasonal flavor", ingredients: [], spicy: false, vegetarian: true, price: 0.5 },
      { id: 2, name: "Birthday Cake", description: "Special flavor", ingredients: [], spicy: false, vegetarian: true, price: 0.5 }
  ],
  cookingIngredients: [
      { id: 0, name: "Salt", description: "", ingredients: ["salt"], spicy: false, vegetarian: true, price: 0.0 },
      { id: 1, name: "Pepper", description: "", ingredients: ["pepper"], spicy: false, vegetarian: true, price: 0.0 },
      { id: 2, name: "Parsley", description: "", ingredients: ["parsley"], spicy: false, vegetarian: true, price: 0.0 },
      { id: 3, name: "Vegan Butter", description: "", ingredients: ["vegan butter"], spicy: false, vegetarian: true, price: 0.5 }
  ]
};

// Flattened Menu
export const flattenedMenu = Object.entries(menu).flatMap(([category, items]) =>
  items.map((item) => ({ ...item, category }))
);

// Function to retrieve items by category
export const getItemsByCategory = (category: string): MenuItem[] => {
  return flattenedMenu.filter((item) => item.category === category);
};
