import {useTheme} from '@app/hooks';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('screen');

type SlideItemProps = {
  item: {
    title: string;
    description: string;
    img: any;
  };
};

const SlideItem: React.FC<SlideItemProps> = ({item}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.img} resizeMode="contain" style={[styles.image]} />
      </View>
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
    paddingHorizontal: 24,
    paddingVertical: 24,
    height: '100%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    padding: 14,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  content: {
    height: '50%',
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Nunito-Black',
    color: '#333',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 12,
    color: '#333',
    fontFamily: 'Nunito-Regular',
  },
});
