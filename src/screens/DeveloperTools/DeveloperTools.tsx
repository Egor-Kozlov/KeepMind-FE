import {CloseButton} from '@app/components';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Languages} from './Components';

export const DeveloperTools = () => {
  return (
    <View>
      <Text style={styles.title}>Developer Tools</Text>
      <CloseButton />
      <ScrollView>
        <View style={styles.section}>
          <Languages />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
