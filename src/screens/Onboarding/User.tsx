import {useTheme} from '@app/hooks';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type UserProps = {
  name: string;
  avatarUrl: string;
};

const User: React.FC<UserProps> = ({name, avatarUrl}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Image source={{uri: avatarUrl}} style={styles.avatar} />
      <Text style={[styles.name, {color: colors.mainText}]}>{name}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
});
