import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: theme.space.x1,
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.space.x1
  },
  checkBox: {
    width: 10,
    height: 10,
    borderRadius: 2,
    alignSelf: 'flex-end',
    marginRight: theme.space.x1,
    borderWidth: 1,
    borderColor: theme.colors.secondary50
  },
  checked: {
    backgroundColor: theme.colors.primary
  },
  notChecked: {
    backgroundColor: theme.colors.secondary100
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: theme.fontSize.sm,
  }
})