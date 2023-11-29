import LocalizedStrings from 'react-native-localization';
import en from './en.json';
import jp from './jp.json';

let t = new LocalizedStrings({
  en,
  jp,
});

const changeLanguage = (lang: string) => {
  t.setLanguage(lang);
};

export {t, changeLanguage};
