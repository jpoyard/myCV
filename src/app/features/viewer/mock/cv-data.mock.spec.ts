import { CurriculumVitaeData, PreparedCurriculumVitaeData } from '../model/cv-data';
import { getMockCareerSummary } from './career-summary.mock.spec';
import { getMockDegrees } from './degree.mock.spec';
import { getMockLanguages } from './language.mock.spec';
import { getMockPersonalData } from './personal-data.mock.spec';
import { getMockWorkExperiences } from './work-experience.mock.spec';

const MOCK_CURRICULUM_VITAE_DATA: CurriculumVitaeData = {
  personalData: getMockPersonalData(),
  careerSummary: getMockCareerSummary(),
  workExperiences: getMockWorkExperiences(),
  degrees: getMockDegrees(),
  languages: getMockLanguages()
};

export function getMockCurriculumVitaeData(): CurriculumVitaeData {
  return JSON.parse(JSON.stringify(MOCK_CURRICULUM_VITAE_DATA));
}

const MOCK_PREPARE_CV_DATA: PreparedCurriculumVitaeData = {
  personalData: getMockPersonalData(),
  contactLinks: [
    {
      icon: 'fa-map-marker',
      label: '2, rue des Monts Chauvet Poissy France',
      url: 'https://www.google.fr/maps/place/2,%20rue%20des%20Monts%20Chauvet%20Poissy%20France'
    },
    {
      icon: 'fa-envelope',
      label: 'julien.poyard@gmail.com',
      url: 'mailto:julien.poyard@gmail.com'
    },
    {
      icon: 'fa-mobile',
      label: '(+33) 6 60 75 40 32',
      url: 'tel:+33660754032'
    }
  ],
  websiteLinks: [{
    icon: 'fa-linkedin',
    label: 'linkedin.com/in/jpoyard',
    url: 'http://www.linkedin.com/in/jpoyard'
  },
  {
    icon: 'fa-github',
    label: 'github.com/jpoyard',
    url: 'https://github.com/jpoyard'
  },
  {
    icon: 'fa-twitter',
    label: '@jpoyard',
    url: 'https://twitter.com/jpoyard'
  },
  {
    icon: 'fa-codepen',
    label: 'codepen.io/jpoyard',
    url: 'https://codepen.io/jpoyard'
  }],
  careerSummary: getMockCareerSummary(),
  workExperiences: getMockWorkExperiences(),
  skillGroups: [{
    title: 'front-end',
    skills: [{
      name: 'Angular',
      keys: ['front',
        'framework'],
      level: 100
    },
    {
      name: 'TypeScript',
      keys: ['front',
        'language'],
      level: 75
    },
    {
      name: 'JavaScript',
      keys: ['front',
        'language'],
      level: 75
    },
    {
      name: 'HTML/CSS/SASS/LESS',
      keys: ['front',
        'language'],
      level: 75
    }]
  },
  {
    title: 'back-end',
    skills: [{
      name: 'Node.js',
      keys: ['back',
        'language',
        'library'],
      level: 75
    }]
  },
  {
    title: 'others',
    skills: [{
      name: 'JSF',
      keys: ['back',
        'framework']
    },
    {
      name: 'Java',
      keys: ['back',
        'language']
    },
    {
      name: 'VSCode',
      keys: ['ide']
    }]
  }],
  degrees: getMockDegrees(),
  languages: getMockLanguages()
};

export function getMockPreparedCurriculumVitaeData(): PreparedCurriculumVitaeData {
  return JSON.parse(JSON.stringify(MOCK_PREPARE_CV_DATA));
}


