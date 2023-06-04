import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import styles from "../../style";
import { v4 as uuid } from "uuid";

const AddTask = ({ Add }) => {
  const [task, setTask] = useState({ taskName: "", isDone: false });
  const handleChange = (value) => {
    setTask({ ...task, taskName: value });
  };
  const press = () => {
    Add({ ...task, id: uuid() });
  };

  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Enter Task"
          keyboardType="default"
          value={task}
          onChangeText={(val) => handleChange(val)}
        ></TextInput>
        <TouchableOpacity
          onPress={press}
          activeOpacity={0.5}
          disabled={!task.taskName || task.taskName.length < 3}
          style={styles.btnTitleStyle}
        >
          <Text style={styles.textStyle}>Add</Text>
        </TouchableOpacity>
      </View>
      {!task.taskName ? (
        <Text style={{ color: "red", marginLeft: 10, fontSize: 15 }}>
          This Feild Is Required
        </Text>
      ) : null}
      {task.taskName.length < 3 && task.taskName ? (
        <Text style={{ color: "red", marginLeft: 10, fontSize: 15 }}>
          Minimum length is 3
        </Text>
      ) : null}
    </View>
  );
};

export default AddTask;
