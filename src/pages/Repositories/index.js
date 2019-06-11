import React, { Component } from 'react';
import {
  Text, View, TextInput, Image, TouchableOpacity, FlatList,
} from 'react-native';

import api from '~/services/api';
import Header from '~/components/Header';

import styles from './styles';
import RepositoryItem from './RepositoryItem';

export default class Repositories extends Component {
  state = {
    repository: '',
    data: [],
  };

  addRepo = async () => {
    const { repository } = this.state;

    const { data } = await api.get(`/repos/${repository}`);

    this.setState({ data });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { data } = this.state;

    console.tron.log(data);

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { repository } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />

        <TextInput
          style={styles.input}
          sutoCorrect={false}
          placeholder="user/repo"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ repository: text })}
          value={repository}
        />

        <TouchableOpacity onPress={this.addRepo}>
          <Text>+</Text>
        </TouchableOpacity>

        {this.renderList()}
      </View>
    );
  }
}
