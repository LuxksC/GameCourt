import { StyleSheet } from "react-native"
import { theme } from "./theme"

export const labels = StyleSheet.create({
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: theme.fontSize.md
  },

  subtitle: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: theme.fontSize.sm
  }
})