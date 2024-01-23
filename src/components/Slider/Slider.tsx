import React, {forwardRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Slides from '../../data/onboarding';
import Pagination from './Pagination';
import SlideItem from './SlideItem';

type SliderProps = {
  slidesData: typeof Slides;
  setCurrentSlideIndex: (index: number) => void;
};

export const Slider: React.FC<SliderProps> = forwardRef(
  (
    {slidesData, setCurrentSlideIndex},
    ref: React.Ref<Animated.FlatList<(typeof Slides)[number]>>,
  ) => {
    const translationX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
      translationX.value = event.contentOffset.x;
      runOnJS(setCurrentSlideIndex)(Math.round(event.contentOffset.x / 375));
    });

    return (
      <View style={{flex: 1}}>
        <Animated.FlatList
          ref={ref}
          data={slidesData}
          style={{flex: 1}}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
        />
        <Pagination countOfSlides={slidesData.length} scrollX={translationX} />
      </View>
    );
  },
);

const styles = StyleSheet.create({});
