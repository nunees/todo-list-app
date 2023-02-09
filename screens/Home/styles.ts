import { StyleSheet } from "react-native";

export const colors = {
  danger: "#E25858",
  gray100: "#F2F2F2",
  gray200: "#D9D9D9",
  gray300: "#808080",
  gray400: "#333333",
  gray500: "#262626",
  gray600: "#1A1A1A",
  gray700: "#0D0D0D",
  purple: "#8284FA",
  purpleDark: "#5E60CE",
  blue: "#4EA8DE",
  blueDark: "#1E6F9F",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    backgroundColor: colors.gray700,
    height: 173,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -32,
  },
  input: {
    width: 271,
    height: 54,
    marginRight: 4,
    padding: 16,
    paddingRight: 63,
    color: colors.gray100,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blueDark,
  },

  tasks: {
    width: 327,
    marginTop: 32,
    alignSelf: "center",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: colors.gray400,
  },

  txtCriadas: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.blue,
  },

  txtConcluidas: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.purple,
  },

  criadasCounter: {
    width: 25,
    height: 25,
    color: "white",
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: colors.gray400,
  },

  concluidasCounter: {
    width: 25,
    height: 25,
    color: "white",
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: colors.gray400,
  },

  todoEmpty: {},
  clipbordImage: {
    width: 56,
    height: 56,
    marginTop: 46,
    marginLeft: 135,
  },

  todoEmptyTitle: {
    paddingTop: 16,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.gray300,
  },

  todoEmptySubTitle: {
    fontSize: 14,
    textAlign: "center",
    color: colors.gray300,
  },
});
