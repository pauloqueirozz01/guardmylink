import { Image, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

import { colors } from "@/styles/colors";

import { Category } from "@/components/category";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.6}>
          <MaterialIcons name="add" size={32} color={colors.gray[400]} />
        </TouchableOpacity>
      </View>
      <Category name="Projetos" icon="code" />
      <Category name="site" icon="language" />
      <Category name="Video" icon="movie" />
    </View>
  );
}
