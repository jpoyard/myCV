export enum LanguageLevelEnum {
  native = 'native',
  professional = 'professional',
}

export interface Language {
  name: string;
  level?: LanguageLevelEnum;
}
