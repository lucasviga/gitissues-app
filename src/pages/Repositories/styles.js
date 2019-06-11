import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 3,
    padding: metrics.basePadding,
    margin: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.light,
  },
});

export default styles;
