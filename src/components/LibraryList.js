/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => {
          return <ListItem library={item} />;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};
export default connect(mapStateToProps)(LibraryList);
