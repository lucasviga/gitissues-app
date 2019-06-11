import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  form: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    padding: metrics.basePadding,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 3,
    padding: metrics.basePadding / 2,
    margin: metrics.baseMargin,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.light,
    fontSize: 14,
  },
  icon: {
    color: colors.darker,
  },
  error: {
    textAlign: 'center',
  },
});

export default styles;
