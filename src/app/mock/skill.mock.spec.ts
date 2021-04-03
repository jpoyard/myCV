import { Skill, SkillLevelEnum } from "../model/skill";

const MOCK_SKILLS: Skill[] = [
  { name: 'Angular', level: SkillLevelEnum.expert },
  { name: 'TypeScript', level: SkillLevelEnum.advanced },
  { name: 'JavaScript', level: SkillLevelEnum.advanced },
  { name: 'Node.js', level: SkillLevelEnum.advanced },
  { name: 'HTML/CSS/SASS/LESS', level: SkillLevelEnum.advanced }
];

export function getMockSkills(): Skill[] {
  return JSON.parse(JSON.stringify(MOCK_SKILLS))
}

