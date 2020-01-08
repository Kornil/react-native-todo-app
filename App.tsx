import React from "react";
import { StyleSheet, View } from "react-native";

import { DefaultView, EditView } from "./app/components";

export type viewState = "default" | "edit";

const App = () => {
  const [viewState, setViewState] = React.useState<viewState>("default");
  return (
    <View style={styles.container}>
      {viewState === "default" ? (
        <DefaultView setViewState={setViewState} />
      ) : (
        <EditView setViewState={setViewState} />
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
