import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  repo: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  repoInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  username: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});

export default styles;
