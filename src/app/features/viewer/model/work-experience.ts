import { Skill } from './skill';

export interface WorkExperiencePeriod {
  start: Date;
  end?: Date;
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
