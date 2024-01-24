import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

export const Theme = () => {
  const {onChangeTheme, theme} = useTheme();

  const changeTheme = () => {
    onChangeTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <Text>Current theme:</Text>
      <View style={styles.listContainer}>
        <Text>Light</Text>
        <Switch
          style={{marginHorizontal: 10}}
          value={theme === 'dark'}
          onValueChange={changeTheme}
        />
        <Text>Dark</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minWidth: 40,
    alignItems: 'center',
  },
});
