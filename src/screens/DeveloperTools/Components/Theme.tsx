import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LanguagesSet} from '../../../localization/i18n';
export const Theme = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const languagesList = Object.values(LanguagesSet);
  const currentLanguage = i18n.language;

  return (
    <View style={styles.container}>
      <Text>Current theme:</Text>
      <View style={styles.listContainer}>
        {languagesList.map((lng: string) => (
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: lng === currentLanguage ? '#ccc' : '#fff'},
            ]}
            onPress={() => changeLanguage(lng)}
            key={lng}
            activeOpacity={0.8}>
            <Text key={lng}>{lng}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minWidth: 40,
    alignItems: 'center',
  },
});
