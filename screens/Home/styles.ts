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
    marginVertical: -30,
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
});
