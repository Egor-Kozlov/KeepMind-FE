import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  Icon: React.FC<any>;
  focused: boolean;
  fillActive: string;
  fillInactive: string;
  name: string;
};

export const TabIcon: React.FC<Props> = ({
  Icon,
  focused,
  fillActive,
  fillInactive,
  name,
}) => {
  const fillProgress = useSharedValue(focused ? 1 : 0);
  const animatedProps = useAnimatedProps(() => {
    const fillValue = interpolateColor(
      fillProgress.value,
      [0, 1],
      ['rgba(0,0,0,0)', 'rgb(255,0,0)'],
    );
    return {
      fill: fillValue,
    };
  });
  useEffect(() => {
    fillProgress.value = withTiming(focused ? 1 : 0, {duration: 1000});
  }, [focused]);

  return (
    <View style={{width: 25, height: 25}}>
      <Icon width="100%" height="100%" />
    </View>
  );
};

const styles = StyleSheet.create({});
