import {Button, ExternalLogin, Slider} from '@app/components';
import {useTheme} from '@app/hooks';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import slidesData from '../../data/onboarding';

export const Onboarding: React.FC = () => {
  const {colors} = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const lastSlideIndex = slidesData.length - 1;

  const onCurrentSlideIndexChange = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.sliderContainer}>
        <Slider
          slidesData={slidesData}
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
