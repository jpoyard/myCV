export enum SkillLevelEnum {
  beginner = 0,
  elementary = 25,
  intermediate = 50,
  advanced = 75,
  expert = 100
}

export interface Skill {
  name: string;
  keys: string[];
  level?: SkillLevelEnum,
}
