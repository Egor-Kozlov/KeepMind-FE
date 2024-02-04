import {StorageKeys, setItem} from '@app/utils/mmkv';
import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export const ResetOnboarding = () => {
  const resetOnboarding = () => {
    setItem(StorageKeys.onboardingCompleted, 'false');
  };

  const onReset = () => {
    Alert.alert(
      'Reset Onboarding',
      'Are you sure you want to reset onboarding?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: () => resetOnboarding(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Text>Reset Onboarding</Text>
      <View style={{flex: 1}}>
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
