import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    flex: 1,
  },
};

export default CardSection;
