import { AsyncStorage } from "react-native";

const ITEMS_KEY = "ITEMS";

export interface Item {
  id: string;
  name: string;
}

export const addItem = async (item: Item) => {
  try {
    const storedItems: Item[] = JSON.parse(
      await AsyncStorage.getItem(ITEMS_KEY)
    );
    const itemsArray = storedItems || [];
    await AsyncStorage.setItem(
      ITEMS_KEY,
      JSON.stringify([...itemsArray, item])
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (item: Item) => {
  try {
    const storedItems: Item[] = JSON.parse(
      await AsyncStorage.getItem(ITEMS_KEY)
    );
    const filteredItems = storedItems.filter(
      selectedItem => selectedItem.id !== item.id
    );
    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(filteredItems));
  } catch (error) {
    console.error(error);
  }
};

export const getItems = async () => {
  try {
    const itemsArray = await AsyncStorage.getItem(ITEMS_KEY);
    return JSON.parse(itemsArray);
  } catch (error) {
    console.error(error);
    return [];
  }
};
