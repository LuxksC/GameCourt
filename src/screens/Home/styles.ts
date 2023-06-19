import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    paddingHorizontal: theme.space.x3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: theme.space.x5,
  },

  content: {
    marginTop: theme.space.x4
  },

  matchesList: {
    marginTop: theme.space.x4,
  }
})