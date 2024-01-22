import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from './en';
import fr from './fr';
import pl from './pl';
import ru from './ru';

export enum LanguagesSet {
  EN = 'en',
  FR = 'fr',
  PL = 'pl',
  RU = 'ru',
}

const getDefaultLanguage = () => {
  const deviceLanguage = getLocales()[0].languageCode;
  if (
    deviceLanguage === 'en' ||
    deviceLanguage === 'fr' ||
    deviceLanguage === 'pl' ||
    deviceLanguage === 'ru'
  ) {
    return deviceLanguage;
  } else {
    return 'en';
  }
};

const resources = {
  // list of languages
  en,
  fr,
  pl,
  ru,
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources,
    fallbackLng: ['en', 'fr', 'pl', 'ru'],
    lng: getDefaultLanguage(),
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
