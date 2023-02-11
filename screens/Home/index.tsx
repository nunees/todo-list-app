import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Logo from "../../assets/images/Logo.png";
import Task from "../../components/Task";
import { styles, colors } from "./styles";

interface Props {
  id: String;
  isComplete: boolean;
  task: String;
}

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={Logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Adicione uma nova tarefa"}
          placeholderTextColor={"#808080"}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="add-circle-outline" size={25} color={colors.gray100} />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksStatus}>
        <View style={styles.statusBox}>
          <Text style={[styles.statusTitle, { color: colors.blue }]}>
            Criadas
          </Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>0</Text>
          </View>
        </View>
        <View style={styles.statusBox}>
          <Text style={[styles.statusTitle, { color: colors.purple }]}>
            Concluídas
          </Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>0</Text>
          </View>
        </View>
      </View>

      {/* <View style={styles.tasks}>
        <View style={styles.todoEmpty}>
          <Image
            style={styles.clipbordImage}
            source={require("../../assets/images/Clipboard.png")}
          />
          <Text style={styles.todoEmptyTitle}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.todoEmptySubTitle}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View> */}

      <Task
        id={"someid"}
        isComplete={true}
        task={
          "Integer urna interdum massa libero auctor neque turpis turpis semper."
        }
      ></Task>
    </View>
  );
}
