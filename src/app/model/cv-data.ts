import { Degree } from './degree';
import { Language } from './language';
import { Link } from './link';
import { PersonalData } from './personal-data';
import { Skill } from './skill';
import { WorkExperience } from './work-experience';

export interface CurriculumVitaeData {
  personalData: PersonalData;
  careerSummary?: string;
  workExperiences: WorkExperience[];
  degrees: Degree[];
  languages: Language[];
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface PreparedCurriculumVitaeData extends CurriculumVitaeData {
  contactLinks: Link[];
  websiteLinks: Link[];
  skillGroups: SkillGroup[];
}
