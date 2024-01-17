import {useTheme} from '@app/hooks';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={[styles.image]} />
      <View style={styles.content}>
        <Text style={[styles.title, {color: colors.mainText}]}>
          {item.title}
        </Text>
        <Text style={[styles.description, {color: colors.secondaryText}]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  image: {
    flex: 0.3,
    width: '100%',
  },
  content: {
    height: '50%',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Nunito-Black',
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
    fontFamily: 'Nunito-Regular',
  },
});
