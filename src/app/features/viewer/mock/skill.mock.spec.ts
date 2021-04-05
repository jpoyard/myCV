import { Skill, SkillLevelEnum } from '../model/skill';

const MOCK_SKILLS: Skill[] = [
  { name: 'Angular', keys: ['front', 'framework'], level: SkillLevelEnum.expert },
  { name: 'AngularJS', keys: ['front', 'framework'], level: SkillLevelEnum.expert, onlyForWorkExperience: true },
  { name: 'JSF', keys: ['back', 'framework'] },
  { name: 'TypeScript', keys: ['front', 'language'], level: SkillLevelEnum.advanced },
  { name: 'JavaScript', keys: ['front', 'language'], level: SkillLevelEnum.advanced },
  { name: 'Node.js', keys: ['back', 'language', 'library'], level: SkillLevelEnum.advanced },
  { name: 'HTML/CSS/SASS/LESS', keys: ['front', 'language'], level: SkillLevelEnum.advanced },
  { name: 'Java', keys: ['back', 'language'] },
  { name: 'VSCode', keys: ['ide'] }

];

export function getMockSkills(): Skill[] {
  return JSON.parse(JSON.stringify(MOCK_SKILLS));
}

