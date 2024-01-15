import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Onboarding = () => {
  return (
    <View>
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Medium',
  },
});
