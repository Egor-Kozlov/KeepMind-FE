import {Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Onboarding: React.FC = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.sliderContainer}>
        <Slider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Medium',
  },
  container: {
    flex: 1,
  },
  sliderContainer: {
    maxHeight: '75%',
    width: '100%',
    borderWidth: 1,
  },
});
