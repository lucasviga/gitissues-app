import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.letf} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.letf} />
  </View>
);

export default Header;
