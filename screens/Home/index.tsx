import { Image, TextInput, TouchableOpacity, View } from "react-native";
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
    </View>
  );
}
