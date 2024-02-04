import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonUp from './ButtonUp';

export const TimerSetup = () => {
  const [time, setTime] = useState('00:20:00');
  const isTimeMin = time === '00:00:00';

  const handleTime = (direction: 'inc' | 'dec', countOfMins = 5) => {
    const [hours, mins, secs] = time.split(':').map(Number);
    let newTime = 0;
    if (direction === 'inc') {
      newTime = hours * 3600 + mins * 60 + secs + countOfMins * 60;
    } else {
      newTime = hours * 3600 + mins * 60 + secs - countOfMins * 60;
    }
    if (newTime < 0) {
      newTime = 0;
    }
    const newHours = Math.floor(newTime / 3600);
    const newMins = Math.floor((newTime - newHours * 3600) / 60);
    const newSecs = newTime - newHours * 3600 - newMins * 60;
    setTime(
      `${newHours.toString().padStart(2, '0')}:${newMins
        .toString()
        .padStart(2, '0')}:${newSecs.toString().padStart(2, '0')}`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.arrowContainerRotate, styles.arrowContainer]}>
        <ButtonUp onPress={() => handleTime('dec')} disabled={isTimeMin} />
      </View>
      <Text style={styles.timer}>{time}</Text>
      <View style={[styles.arrowContainer]}>
        <ButtonUp onPress={() => handleTime('inc')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timer: {
    borderWidth: 1,
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
