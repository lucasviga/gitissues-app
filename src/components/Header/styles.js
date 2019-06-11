import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
