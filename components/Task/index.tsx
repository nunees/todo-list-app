import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

interface Props {
  id: string;
  isComplete: boolean;
  task: string;
}

export default function Task({ id, isComplete, task }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={isComplete ? styles.checkedBox : styles.uncheckedBox}
      ></TouchableOpacity>

      <Text style={isComplete ? styles.taskDone : styles.task}>{task}</Text>

      <TouchableOpacity
        style={styles.deleteTask}
        onPress={styles.deleteTaskActive}
      >
        <Icon style={styles.trash} name="trash-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
}
