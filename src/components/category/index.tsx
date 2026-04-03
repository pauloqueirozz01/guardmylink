import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export function Category(props: any) {
  return (
    <Pressable style={styles.container}>
      <MaterialIcons name={props.icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}
