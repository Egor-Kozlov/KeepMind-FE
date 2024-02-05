import {CommonButton} from '@app/components';
import handleTime from '@app/utils/functions/handleTime';
import playVibration from '@app/utils/playVibration';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import ButtonUp from './ButtonUp';

export const TimerSetup = () => {
  const [time, setTime] = useState('00:20:00');
  const isMinToStart = time === '00:10:00';

  const onHandleTime = (type: 'inc' | 'dec') => {
    if (isMinToStart && type === 'dec') {
      playVibration('rigid');
      shakeTimerAnimation();
      return;
    }
    playVibration('soft');
    handleTime(type, 5, time, setTime);
  };
  // Animation for shake
  const offset = useSharedValue(0);
  const styleShake = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const OFFSET = 5;
  const TIME = 70;

  const shakeTimerAnimation = () => {
    offset.value = withSequence(
      // start from -OFFSET
      withTiming(-OFFSET, {duration: TIME / 2}),
      // shake between -OFFSET and OFFSET 5 times
      withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
      // go back to 0 at the end
      withTiming(0, {duration: TIME / 2}),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <View style={[styles.arrowContainerRotate, styles.arrowContainer]}>
          <ButtonUp
            onPress={() => onHandleTime('dec')}
            disabled={isMinToStart}
          />
        </View>
        <Animated.View style={styleShake}>
          <Text style={styles.timer}>{time}</Text>
        </Animated.View>
        <View style={[styles.arrowContainer]}>
          <ButtonUp onPress={() => onHandleTime('inc')} />
        </View>
      </View>
      <View>
        <CommonButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timer: {
    width: 150,
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
  },
  arrowContainer: {
    margin: 10,
  },
  arrowContainerRotate: {
    transform: [{rotate: '180deg'}],
  },
});
