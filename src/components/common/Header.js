import React from 'react';
import {Text} from 'react-native';

const Header = (props) => {
  return (
    <Text style={styles.header}>
      {props.children}
    </Text>
  );
};

const styles = {
  header: {
    marginTop: 20,
    fontSize: 25,
    alignSelf: 'center',
  },
};

export default Header;
