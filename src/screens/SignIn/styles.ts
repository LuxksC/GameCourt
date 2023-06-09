import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: `100%`,
  },

  content: {
    marginTop: -theme.space.x5,
    paddingHorizontal: '13%',
  },

  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    fontFamily: theme.fonts.title700,
    lineHeight: theme.space.x5,
    marginBottom: theme.space.x5
  },

  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fonts.text400,
    lineHeight: theme.space.x3,
    marginBottom: theme.space.x8,
  }
});