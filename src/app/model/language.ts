export enum SupportedLanguageEnum {
  french = 'fr',
  english = 'en',
}

export interface DiplayedLanguage {
  language: SupportedLanguageEnum;
  label: string;
}

export const SUPPORTED_LANGUAGES: DiplayedLanguage[] = [
  { language: SupportedLanguageEnum.french, label: 'français' },
  { language: SupportedLanguageEnum.english, label: 'english' },
];
