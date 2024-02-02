import AppleLogo from '@app/assets/icons/apple-logo';
import {useTheme} from '@app/hooks';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import onGoogleButtonPress from '../../thirdparty/googleAuth';

export const ExternalLogin = () => {
  const {colors, theme} = useTheme();

  const googleButtonColor =
    theme === 'dark'
      ? GoogleSigninButton.Color.Light
      : GoogleSigninButton.Color.Dark;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.appleButton}>
        <View style={styles.iconContainer}>
          <AppleLogo height="100%" width={30} />
        </View>
        <Text style={[styles.text, {color: colors.mainText}]}>
          Login with Apple
        </Text>
      </TouchableOpacity>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={googleButtonColor}
        onPress={onGoogleButtonPress}
        // disabled={isInProgress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    height: 40,
    marginBottom: 16,
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
