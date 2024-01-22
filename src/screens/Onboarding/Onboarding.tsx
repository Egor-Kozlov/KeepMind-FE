import {Button, ExternalLogin, Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import slidesData from '../../data/onboarding';

export const Onboarding: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const lastSlideIndex = slidesData.length - 1;

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
          slidesData={generateSlidesContent()}
          setCurrentSlideIndex={onCurrentSlideIndexChange}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={currentSlideIndex === lastSlideIndex ? 'Finish' : 'Next'}
            onPress={() => {}}
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
