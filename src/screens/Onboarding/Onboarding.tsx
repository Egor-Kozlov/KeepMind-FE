import {Button, Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import {StorageKeys, setItem} from '@app/utils/mmkv';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import slidesData from '../../data/onboarding';
import {RootState} from '../../store/store';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const Onboarding: React.FC = () => {
  const {name, avatarUrl} = useSelector((state: RootState) => state.user);

  const {t} = useTranslation();
  const {colors} = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const lastSlideIndex = slidesData.length - 1;
  const isLastSlide = currentSlideIndex >= lastSlideIndex;

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

  const finishOnboarding = () => {
    setItem(StorageKeys.onboardingCompleted, 'true');
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
        <View style={styles.bottomContainer}>
          <Button
            title={
              isLastSlide
                ? t('onboarding:START_BUTTON')
                : t('onboarding:NEXT_BUTTON')
            }
            onPress={() => {
              if (isLastSlide) {
                finishOnboarding();
              } else {
                scrollTo(currentSlideIndex + 1);
              }
            }}
          />

          <View style={styles.skipContainer}>
            {!isLastSlide && (
              <AnimatedTouchableOpacity
                onPress={() => {
                  scrollTo(lastSlideIndex);
                  // playVibration('soft');
                }}
                entering={FadeIn}
                exiting={FadeOut}
                hitSlop={15}>
                <Text style={styles.skipText}>
                  {t('onboarding:SKIP_BUTTON')}
                </Text>
              </AnimatedTouchableOpacity>
            )}
          </View>

          {/* <View style={styles.signinContainer}>
            {!name ? (
              <User name={name} avatarUrl={avatarUrl} />
            ) : (
              <ExternalLogin />
            )}
          </View> */}
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
  bottomContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sliderContainer: {
    flex: 1,
  },
  signinContainer: {
    marginTop: 24,
  },
  skipContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    height: 22,
  },
  skipText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#A1A4B2',
  },
});
