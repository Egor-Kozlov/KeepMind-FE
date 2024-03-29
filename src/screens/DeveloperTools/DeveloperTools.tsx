import {CloseButton} from '@app/components';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Languages, ResetOnboarding, Theme} from './Components';

export const DeveloperTools = () => {
  return (
    <View>
      <Text style={styles.title}>Developer Tools</Text>
      <CloseButton />
      <ScrollView>
        <View style={styles.section}>
          <Languages />
        </View>
        <View style={styles.section}>
          <Theme />
        </View>
        <View style={styles.section}>
          <ResetOnboarding />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
  section: {
    minHeight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
