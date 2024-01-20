import {useTheme} from '@app/hooks';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

type PaginationProps = {
  countOfSlides: number;
  scrollX: SharedValue<number | null>;
};

const Dot = ({
  scrollX,
  inputRange,
}: {
  scrollX: SharedValue<number | null>;
  inputRange: number[];
}) => {
  const {colors} = useTheme();
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(scrollX.value ?? 0, inputRange, [
      colors.paginationInactiveDot,
      colors.paginationActiveDot,
      colors.paginationInactiveDot,
    ]),
    width: interpolate(scrollX.value ?? 0, inputRange, [12, 30, 12], 'clamp'),
  }));

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const Pagination: React.FC<PaginationProps> = ({countOfSlides, scrollX}) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(countOfSlides).keys()).map((key, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        return <Dot key={key} scrollX={scrollX} inputRange={inputRange} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3.5,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#000',
  },
});
