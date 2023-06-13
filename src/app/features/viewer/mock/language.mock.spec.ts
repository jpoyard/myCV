import { Language, LanguageLevelEnum } from '../model/language';

const MOCK_LANGUAGES: Language[] = [
  {
    name: 'french',
    level: LanguageLevelEnum.native,
  },
  {
    name: 'english',
    level: LanguageLevelEnum.professional,
  },
  {
    name: 'spanish',
    level: LanguageLevelEnum.professional,
  },
];

export function getMockLanguages(): Language[] {
  return JSON.parse(JSON.stringify(MOCK_LANGUAGES));
}
