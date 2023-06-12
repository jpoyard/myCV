import { Skill } from './skill';

export interface WorkExperience {
  jobTitle: string;
  company: string;
  serviceCompany?: string;
  period: {
    start: Date;
    end?: Date;
  };
  description: string;
  achievements: {
    description: string;
    items: string[];
  };
  skills: Skill[];
}
