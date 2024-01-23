import {Button, ExternalLogin, Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import slidesData from '../../data/onboarding';

export const Onboarding: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const lastSlideIndex = slidesData.length - 1;

  const scrollRef =
    useRef<Animated.FlatList<(typeof slidesData)[number]>>(null);

  const scrollTo = (index: number) => {
    scrollRef?.current?.scrollToIndex({index});
  };

  const onCurrentSlideIndexChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const generateSlidesContent = () => {
    return slidesData.map((slide, index) => {
      return {
        ...slide,
        id: index,
        title: t('onboarding:FIRST_SCREEN.TITLE'),
        description: t('onboarding:FIRST_SCREEN.DESCRIPTION'),
      };
    });
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.sliderContainer}>
        <Slider
          ref={scrollRef}
          slidesData={generateSlidesContent()}
          setCurrentSlideIndex={onCurrentSlideIndexChange}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={
              currentSlideIndex === lastSlideIndex
                ? t('onboarding:START_BUTTON')
                : t('onboarding:NEXT_BUTTON')
            }
            onPress={() => {
              if (currentSlideIndex === lastSlideIndex) {
                return;
              }
              scrollTo(currentSlideIndex + 1);
            }}
          />
          <ExternalLogin />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Medium',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  sliderContainer: {
    flex: 0.93,
  },
});
