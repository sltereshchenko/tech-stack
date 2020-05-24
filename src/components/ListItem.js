/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import Card from './common/Card';
import * as actions from '../actions';
import {connect} from 'react-redux';


class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const {title, id, description} = this.props.library;
    const expanded = this.props.expanded;
    const renderDescription = () => {
      if (expanded) {
        return (
          <Text>
            {description}
          </Text>
        );
      } else return null;
    };

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <Card>
            <Text>{title}</Text>
          </Card>
          {renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
