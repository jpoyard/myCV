import { Skill } from './skill';

export interface WorkExperiencePeriod {
  start: string;
  end?: string;
}

export interface WorkExperience {
  jobTitle: string;
  company: string;
  serviceCompany?: string;
  period: WorkExperiencePeriod;
  description: string;
  achievements: {
    description: string;
    items: string[];
  };
  skills: Skill[];
}
