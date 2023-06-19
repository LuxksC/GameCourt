import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: theme.space.x3
  }
})