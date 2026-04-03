import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.green[900],
    fontFamily: "Arial",
    /* flexDirection: "row", para deixar o texto um ao lado do outro*/
  },
  subtitle: {
    fontSize: 18,
    color: colors.green[300],
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});
