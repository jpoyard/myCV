import { PersonalData } from '../model/personal-data';

const MOCK_PERSONAL_DATA: PersonalData = {
  thumbnailUrl:
    'https://avatars.githubusercontent.com/u/10052221?s=300&u=c7f0a14b253da712b9c86661bbc148281bb220d1&v=4',
  firstName: 'Julien',
  lastName: 'Poyard',
  jobTitle: 'Font-end Developer',
  address: '2, rue des Monts Chauvet Poissy France',
  phoneNumber: '(+33) 6 60 75 40 32',
  email: 'julien.poyard@gmail.com',
  accounts: [
    {
      icon: 'linkedin',
      label: 'linkedin.com/in/jpoyard',
      url: 'http://www.linkedin.com/in/jpoyard',
    },
    {
      icon: 'github',
      label: 'github.com/jpoyard',
      url: 'https://github.com/jpoyard',
    },
    {
      icon: 'twitter',
      label: '@jpoyard',
      url: 'https://twitter.com/jpoyard',
    },
    {
      icon: 'codepen',
      label: 'codepen.io/jpoyard',
      url: 'https://codepen.io/jpoyard',
    },
  ],
};

export function getMockPersonalData(): PersonalData {
  return JSON.parse(JSON.stringify(MOCK_PERSONAL_DATA));
}
