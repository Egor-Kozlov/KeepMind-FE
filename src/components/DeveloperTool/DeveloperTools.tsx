// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DeveloperIcon from '../../assets/icons/developer-icon';

type Props = {
  onPress: () => void;
};

export const DeveloperTool: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <DeveloperIcon width={30} height={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    right: '20%',
    width: 30,
    height: 30,
  },
});
