import { View, Text, StyleSheet } from "react-native";
import Task from "./Task";
import { useState } from "react";

const Tasks = ({ tasks, Delete }) => {
  const [taskDone, settaskDone] = useState(0);

  const getDone = (f) => {
    f ? settaskDone(taskDone + 1) : settaskDone(taskDone - 1);
  };
  return (
    <View style={styles.container}>

      {tasks.map((oneTask) => (
        <Task
          key={oneTask.id}
          oneTask={oneTask}
          Delete={Delete}
          getD={getDone}
        ></Task>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    textAlign: "center",
  },
});

export default Tasks;
