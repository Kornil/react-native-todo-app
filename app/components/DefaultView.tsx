import React from "react";
import { Text, Button, FlatList } from "react-native";

import { Item, getItems } from "../store";
import { viewState } from "../../App";
import ListItem from "./ListItem";

interface IProps {
  setViewState: React.Dispatch<React.SetStateAction<viewState>>;
}

const DefaultView: React.FC<IProps> = ({ setViewState }) => {
  const [data, setData] = React.useState<Array<Item>>([]);

  React.useEffect(() => {
    getItems().then((items: Item[]) => setData(items));
  }, [data]);

  return (
    <>
      <Text>Todo List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
      <Button title="Add new Item" onPress={() => setViewState("edit")}>
        Add new Item
      </Button>
    </>
  );
};

export default DefaultView;
