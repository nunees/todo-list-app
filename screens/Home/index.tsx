import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { styles, colors } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Logo.png")}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Adicione uma nova tarefa"}
          placeholderTextColor={"#808080"}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="pluscircleo" size={16} color={colors.gray100} />
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <View style={styles.info}>
          <Text style={styles.txtCriadas}>
            Criadas <Text style={styles.criadasCounter}>{0}</Text>
          </Text>
          <Text style={styles.txtConcluidas}>
            Concluidas <Text style={styles.concluidasCounter}>{0}</Text>
          </Text>
        </View>

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
      </View>
    </View>
  );
}
