import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { DefaultView, EditView } from "./app/components";

export type viewState = "default" | "edit";

const App = () => {
  const [viewState, setViewState] = React.useState<viewState>("default");

  const handleNewPress = () => setViewState("edit");
  const handleCancelPress = () => setViewState("default");

  return (
    <View style={styles.container}>
      {viewState === "default" ? (
        <>
          <DefaultView />
          <Button title="Add new Item" onPress={handleNewPress}>
            Add new Item
          </Button>
        </>
      ) : (
        <>
          <EditView setViewState={handleCancelPress} />
          <Button title="Cancel" onPress={handleCancelPress}>
            Cancel
          </Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
