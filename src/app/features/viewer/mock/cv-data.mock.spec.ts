import { CurriculumVitaeData } from "../model/cv-data";
import { getMockCareerSummary } from "./career-summary.mock.spec";
import { getMockDegrees } from "./degree.mock.spec";
import { getMockLanguages } from "./language.mock.spec";
import { getMockPersonalData } from "./personal-data.mock.spec";
import { getMockSkills } from "./skill.mock.spec";
import { getMockWorkExperiences } from "./work-experience.mock.spec";

const MOCK_CURRICULUM_VITAE_DATA: CurriculumVitaeData = {
  personalData: getMockPersonalData(),
  careerSummary: getMockCareerSummary(),
  workExperiences: getMockWorkExperiences(),
  skills: getMockSkills(),
  degrees: getMockDegrees(),
  languages: getMockLanguages()
}

export function getMockCurriculumVitaeData(): CurriculumVitaeData {
  return JSON.parse(JSON.stringify(MOCK_CURRICULUM_VITAE_DATA));
}

