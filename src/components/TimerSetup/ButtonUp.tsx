import ArrowUp from '@app/assets/icons/ArrowUp';
import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  disabled?: boolean;
  onPress: () => void;
};

const ButtonUp: React.FC<Props> = ({onPress, disabled}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} hitSlop={3}>
      <ArrowUp
        width={50}
        height={50}
        fill={disabled ? colors.setTimerArrowDisabled : colors.setTimerArrow}
      />
    </TouchableOpacity>
  );
};

export default ButtonUp;

const styles = StyleSheet.create({});
