import { Categories } from "@/components/categories";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.6}>
          <MaterialIcons name="add" size={32} color={colors.gray[400]} />
        </TouchableOpacity>
      </View>
      <Categories />
    </View>
  );
}
