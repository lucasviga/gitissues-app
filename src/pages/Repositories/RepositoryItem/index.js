import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View>
    <View style={styles.repo}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://avatars0.githubusercontent.com/u/28929274?v=4' }}
      />
      <View style={styles.repoInfo}>
        <Text style={styles.username}>{repository.login}</Text>
        <Text style={styles.name}>{repository.name}</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;
