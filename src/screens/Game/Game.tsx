import {TimerSetup} from '@app/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Game = () => {
  return (
    <View>
      <Text>Game</Text>
      <View>
        <TimerSetup />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
