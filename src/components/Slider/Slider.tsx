import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Slides from '../../data/onboarding';
import Pagination from './Pagination';
import SlideItem from './SlideItem';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const translationX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationX.value = event.contentOffset.x;
    runOnJS(setIndex)(Math.round(event.contentOffset.x / 375));
  });

  return (
    <View>
      <Animated.FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
      />
      <Pagination countOfSlides={Slides.length} scrollX={translationX} />
    </View>
  );
};

const styles = StyleSheet.create({});
