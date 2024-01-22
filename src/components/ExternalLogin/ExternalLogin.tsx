import {useTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppleLogo from '../../assets/icons/apple-logo';

export const ExternalLogin = () => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <AppleLogo height="100%" width={30} />
      </View>
      <Text style={[styles.text, {color: colors.mainText}]}>
        Login with Apple
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: 40,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
    textAlign: 'center',
  },
  iconContainer: {
    height: '80%',
    marginRight: 8,
    paddingBottom: 2,
  },
});