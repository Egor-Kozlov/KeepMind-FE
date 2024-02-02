import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export const ResetOnboarding = () => {
  const onResetOnboarding = () => {
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
          onPress: () => {
            // reset onboarding
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Text>Reset Onboarding</Text>
      <View style={{flex: 1}}>
        <Button title="Reset" onPress={onResetOnboarding} />
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
