import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [coureGoals, setCoureGoals] = useState([]);

  const addGoalHandler = (entredGoalText) => {
    setCoureGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: entredGoalText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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
  goalsContainer: {
    flex: 5,
  },
});
