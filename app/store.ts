import { AsyncStorage } from "react-native";

const ITEMS_KEY = "ITEMS";

export interface Item {
  id: string;
  name: string;
}

type actionType = (item: Item) => Promise<void>;

// add a new todo
export const addItem: actionType = async (item: Item) => {
  try {
    const storedItems: Item[] = JSON.parse(
      await AsyncStorage.getItem(ITEMS_KEY)
    );
    // itemsArray will be null if there are no elements
    // we need to make it an array in that case
    const itemsArray = storedItems || [];
    await AsyncStorage.setItem(
      ITEMS_KEY,
      JSON.stringify([...itemsArray, item])
    );
  } catch (error) {
    console.error(error);
  }
};

// remove an existing todo
export const deleteItem: actionType = async (item: Item) => {
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

type getItemsType = () => Promise<Array<Item>>;

// list all todos
export const getItems: getItemsType = async () => {
  try {
    const itemsArray: Item[] = JSON.parse(
      await AsyncStorage.getItem(ITEMS_KEY)
    );
    return itemsArray;
  } catch (error) {
    console.error(error);
  }
  return [];
};
