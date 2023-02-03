import { Image, TextInput, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/Logo.png")} />
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder={"Adicione uma tarefa"} />
      </View>
    </View>
  );
}
