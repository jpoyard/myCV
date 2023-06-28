import { WorkExperience } from '@model/work-experience';
import { getMockSkills } from './skill.mock';

const WORK_EXPERIENCES: WorkExperience[] = [
  {
    jobTitle: 'Tech Lead Developer',
    company: 'Startup Hub',
    period: {
      start: '2018-03-01',
    },
    description: `Role description goes here ipsum dolor sit amet, consectetuer adipiscing
  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
  quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede
  justo, fringilla vel.`,
    achievements: {
      description: `Praesentium voluptatum deleniti atque corrupti quos dolores et quas
    molestias excepturi sint occaecati cupiditate non provident.`,
      items: [
        'Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.',
        'At vero eos et accusamus et iusto odio dignissimos.',
        'Blanditiis praesentium voluptatum deleniti atque corrupti.',
        'Maecenas tempus tellus eget.',
      ],
    },
    skills: getMockSkills(),
  },
  {
    jobTitle: 'Lead Developer',
    company: 'a company',
    serviceCompany: 'a service company',
    period: {
      start: '2016-06-01',
      end: '2017-06-30',
    },
    description: `Role description goes here ipsum dolor sit amet, consectetuer adipiscing
  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  penatibus et magnis.`,
    achievements: {
      description: `Praesentium voluptatum deleniti atque corrupti quos dolores et quas
    molestias excepturi sint occaecati cupiditate non provident.`,
      items: [
        'Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.',
        'Maecenas tempus tellus eget.',
      ],
    },
    skills: getMockSkills(),
  },
];

export function getMockWorkExperiences(): WorkExperience[] {
  return JSON.parse(JSON.stringify(WORK_EXPERIENCES));
}
