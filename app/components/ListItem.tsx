import React from "react";
import { Text, Button } from "react-native";

import { Item, deleteItem } from "../store";

interface IProps {
  item: Item;
}

const ListItem: React.FC<IProps> = ({ item }) => {
  return (
    <>
      <Text>{item.name}</Text>
      <Button title="Delete" onPress={() => deleteItem(item)}>
        Delete
      </Button>
    </>
  );
};

export default ListItem;
