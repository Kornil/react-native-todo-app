import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { DefaultView, EditView } from "./app/components";

export type viewState = "default" | "edit";

const App = () => {
  const [viewState, setViewState] = React.useState<viewState>("default");
  return (
    <View style={styles.container}>
      {viewState === "default" ? (
        <>
          <DefaultView />
          <Button title="Add new Item" onPress={() => setViewState("edit")}>
            Add new Item
          </Button>
        </>
      ) : (
        <>
          <EditView setViewState={setViewState} />
          <Button title="Cancel" onPress={() => setViewState("default")}>
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
