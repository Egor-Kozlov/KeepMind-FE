import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  Icon: any;
  fill: string;
};

export const TabIcon: React.FC<Props> = ({Icon, fill}) => {
  return (
    <View style={{width: 25, height: 25}}>
      <Icon width="100%" height="100%" fill={fill} />
    </View>
  );
};

const styles = StyleSheet.create({});
