import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [entredGoalText, setEntredGoalText] = useState("");
  const [coureGoals, setCoureGoals] = useState([]);
  const goalInputHandler = (inputValue) => {
    setEntredGoalText(inputValue);
  };
  const addGoalHandler = () => {
    setCoureGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: entredGoalText, key: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputcontainter}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={coureGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          accessibilityElementsHidden={true}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#FBF3E4",
  },
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
  goalsContainer: {
    flex: 5,
  },
});
