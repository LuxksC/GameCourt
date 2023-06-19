import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.space.x3,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.space.x4
  },
  content: {
    flex: 1,
    height: 68,
    marginLeft: theme.space.x3,
    justifyContent: 'space-around',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.space.x1
  },
  date: {
    fontFamily: theme.fonts.text500,
    fontSize: 14,
    color: theme.colors.heading,

  },
  userStatus: {
    fontFamily: theme.fonts.text400,
    fontSize: 14,
  }
})