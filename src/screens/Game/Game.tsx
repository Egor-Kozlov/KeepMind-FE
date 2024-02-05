import {TimerSetup} from '@app/components';
import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Game = () => {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Text>Game</Text>
      <View>
        <TimerSetup />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
