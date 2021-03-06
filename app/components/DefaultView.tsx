import React from "react";
import { Text, FlatList } from "react-native";

import { Item, getItems } from "../store";
import ListItem from "./ListItem";

const DefaultView: React.FC = () => {
  const [data, setData] = React.useState<Array<Item>>([]);

  React.useEffect(() => {
    // isMounted unsubscribes React from the async operation
    // if the component is unmounted
    let isMounted = true;
    getItems().then((items: Item[]) => {
      if (isMounted) setData(items);
    });
    return () => (isMounted = false);
  }, [data]);

  return (
    <>
      <Text>Todo List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default DefaultView;
