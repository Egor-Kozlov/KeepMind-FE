import {Button, ExternalLogin, Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const Onboarding: React.FC = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.sliderContainer}>
        <Slider />
        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={() => {}} />
          <ExternalLogin />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Medium',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  sliderContainer: {
    flex: 0.93,
  },
});
