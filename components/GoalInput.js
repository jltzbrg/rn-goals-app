import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput({ onGoalInput, onAddGoal }) {
  const [entredGoalText, setEntredGoalText] = useState("");

  const goalInputHandler = (inputValue) => {
    setEntredGoalText(inputValue);
  };

  const addGoalHandler = () => {
    onAddGoal(entredGoalText);
    setEntredGoalText("");
  };
  return (
    <View style={styles.inputcontainter}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal!"
        onChangeText={goalInputHandler}
        value={entredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputcontainter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    height: 40,
    marginRight: 8,
    paddingLeft: 8,
  },
});
