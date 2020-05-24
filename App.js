import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';
import Header from './src/components/common/Header';

const app = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.container} >
        <Header>Tech Stack</Header>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
