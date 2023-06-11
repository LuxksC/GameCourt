import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: theme.fontSize.md,
    color: theme.colors.heading
  },

  username: {
    fontFamily: theme.fonts.title700,
    fontSize: theme.fontSize.md,
    color: theme.colors.heading,
    marginLeft: theme.space.x1
  },

  message: {
    fontFamily: theme.fonts.text400,
    fontSize: theme.fontSize.sm,
    color: theme.colors.highlight
  }
})