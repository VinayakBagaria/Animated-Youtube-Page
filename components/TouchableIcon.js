import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { touchableIconStyles as styles } from './styles';

const TouchableIcon = ({ name, children }) => (
  <TouchableOpacity style={styles.touchIcon}>
    <Icon name={name} size={30} color="#767577" />
    <Text style={styles.iconText}>{children}</Text>
  </TouchableOpacity>
);

TouchableIcon.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TouchableIcon;
