import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors.button}]}>
      <Text style={[styles.text, {color: colors.mainText}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
