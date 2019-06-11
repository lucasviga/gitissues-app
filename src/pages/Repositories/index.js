import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';

import api from '~/services/api';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import RepositoryItem from './RepositoryItem';

export default class Repositories extends Component {
  state = {
    repository: '',
    loading: false,
    error: '',
    repositories: [],
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    await AsyncStorage.getItem('@GoNative:desafio');
  };

  addRepo = async () => {
    const {
      repositories, repository, loading, error,
    } = this.state;

    this.setState({ loading: true });

    try {
      const { data } = await api.get(`/repos/${repository}`);

      this.setState({
        repositories: [...repositories, data],
        repository: '',
        loading: false,
        error: '',
      });

      await AsyncStorage.setItem('@GoNative:desafio', { repositories: [...repositories, data] });
    } catch (err) {
      this.setState({ error: 'Este repositório/usuário não existe', loading: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repositories } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { repository, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              sutoCorrect={false}
              placeholder="user/repo"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ repository: text })}
              value={repository}
            />

            <TouchableOpacity onPress={this.addRepo}>
              {loading ? (
                <ActivityIndicator size="small" color="#666" />
              ) : (
                <Icon name="plus" size={18} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.error}>{error}</Text>
        </View>

        {this.renderList()}
      </View>
    );
  }
}
