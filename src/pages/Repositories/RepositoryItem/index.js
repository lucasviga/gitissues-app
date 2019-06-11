import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.repo}>
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    <View style={styles.repoInfo}>
      <Text style={styles.username}>{repository.full_name}</Text>
      <Text style={styles.name}>{repository.owner.login}</Text>
    </View>
  </View>
);

export default RepositoryItem;
