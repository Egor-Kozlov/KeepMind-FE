import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DeveloperIcon from '../../assets/icons/developer-icon';

export const DeveloperTool = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <DeveloperIcon width={30} height={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    right: '5%',
    width: 30,
    height: 30,
  },
});
