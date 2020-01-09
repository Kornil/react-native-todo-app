import React from "react";
import { Text, TextInput, Button } from "react-native";
import uuidv4 from "uuid/v4";

import { addItem } from "../store";
import { viewState } from "../../App";

interface IProps {
  setViewState: React.Dispatch<React.SetStateAction<viewState>>;
}

const EditView: React.FC<IProps> = ({ setViewState }) => {
  const [itemName, setItemName] = React.useState<string>("");
  const onSubmit = async () => {
    await addItem({ id: uuidv4(), name: itemName });
    setViewState("default");
  };
  return (
    <>
      <Text>Add a new Item</Text>
      <TextInput
        value={itemName}
        placeholder="Title"
        onChangeText={setItemName}
      />
      <Button title="Submit" onPress={onSubmit}>
        Submit
      </Button>
    </>
  );
};

export default EditView;
