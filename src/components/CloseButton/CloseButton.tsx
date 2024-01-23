import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CloseIcon from '../../assets/icons/close-icon';

type Props = {
  onPress?: () => void;
};

export const CloseButton: React.FC<Props> = ({onPress}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <CloseIcon width="100%" height="100%" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: 13,
    left: 13,
  },
});
