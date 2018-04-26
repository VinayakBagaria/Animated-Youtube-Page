import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TouchableIcon = ({ name, children }) => (
  <TouchableOpacity style={styles.touchIcon}>
    <Icon name={name} size={30} color="#767577" />
    <Text style={styles.iconText}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginTop: 5,
  },
});

export default TouchableIcon;
