import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type StepProps = {
  title: string;
  description: string;
  image: string;
};

const Step: React.FC<StepProps> = ({title, description, image}) => {
  return (
    <View style={styles.container}>
      <Text>Step</Text>
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: 'Nunito-Medium',
  },
});
