import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  },
  title: {
    flex: 1, // Essa propriedade faz com que o elemento ocupe todo espaço disponível no flexbox
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: theme.fontSize.sm
  }
})