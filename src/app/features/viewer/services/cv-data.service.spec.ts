import { WritableSignal, signal } from '@angular/core';
import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import {
  getMockCurriculumVitaeData,
  getMockPreparedCurriculumVitaeData,
} from '@mock/cv-data.mock';
import { getMockSkills } from '@mock/skill.mock';
import { CurriculumVitaeData } from '@model/cv-data';
import { Link } from '@model/link';
import { PersonalData } from '@model/personal-data';
import { SkillLevelEnum } from '@model/skill';
import { WorkExperience } from '@model/work-experience';
import { CvDataLoaderService } from './cv-data-loader.service';
import { CurriculumVitaeDataService } from './cv-data.service';

describe(CurriculumVitaeDataService.name, () => {
  let service: CurriculumVitaeDataService;
  let mockCvDataLoaderService: {
    request(): void;
    data: WritableSignal<CurriculumVitaeData | null>;
  };

  beforeEach(() => {
    mockCvDataLoaderService = {
      request: jest.fn(),
      data: signal<CurriculumVitaeData | null>(null),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: CvDataLoaderService, useValue: mockCvDataLoaderService },
        CurriculumVitaeDataService,
      ],
    });
    service = TestBed.inject(CurriculumVitaeDataService);
  });

  describe('data', () => {
    it(`should retrieve CV when data is defined`, fakeAsync(() => {
      // Given
      mockCvDataLoaderService.data.set(getMockCurriculumVitaeData());

      // When
      flush();

      // Then
      expect(mockCvDataLoaderService.request).toHaveBeenCalled();
      expect(service.data()).toEqual(getMockPreparedCurriculumVitaeData());
    }));

    it(`should be null when raw data is null`, fakeAsync(() => {
      // Given
      mockCvDataLoaderService.data.set(null);

      // When
      flush();

      // Then
      expect(mockCvDataLoaderService.request).toHaveBeenCalled();
      expect(service.data()).toBeNull();
    }));
  });

  describe('getContactLinks()', () => {
    it('should return empty array when adress, email and phoneNumber are undefined', () => {
      // Given
      const expected: Link[] = [];

      // When
      const actual = service.getContactLinks({} as PersonalData);

      // Then
      expect(actual).toEqual(expected);
    });
    [
      {
        when: {
          address: '15 Avenue des Champs-Élysées, Paris',
        } as PersonalData,
        then: {
          icon: 'home',
          label: '15 Avenue des Champs-Élysées, Paris',
          url: `https://www.google.fr/maps/place/15%20Avenue%20des%20Champs-%C3%89lys%C3%A9es,%20Paris`,
        },
      },
      {
        when: { email: 'john.doe@yahoo.com' } as PersonalData,
        then: {
          icon: 'mail',
          label: 'john.doe@yahoo.com',
          url: 'mailto:john.doe@yahoo.com',
        },
      },
      {
        when: { phoneNumber: '(+33)6 12 34 56 78' } as PersonalData,
        then: {
          icon: 'phone',
          label: '(+33)6 12 34 56 78',
          url: 'tel:+33612345678',
        },
      },
    ].forEach((scenario) => {
      it(`should return array with ${JSON.stringify(
        scenario.then
      )}, when ${JSON.stringify(scenario.when)}`, () => {
        // Given
        const expected: Link[] = [scenario.then];

        // When
        const actual = service.getContactLinks(scenario.when);

        // Then
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('getSkillGroups', () => {
    [
      {
        when: [],
        then: [],
      },
      {
        when: [
          {
            name: 'Angular',
            keys: ['front', 'framework'],
            level: SkillLevelEnum.expert,
          },
        ],
        then: [
          {
            title: 'front-end',
            skills: [
              { name: 'Angular', keys: ['front', 'framework'], level: 100 },
            ],
          },
        ],
      },
      {
        when: [
          {
            name: 'Java',
            keys: ['back', 'language'],
            level: SkillLevelEnum.intermediate,
          },
        ],
        then: [
          {
            title: 'back-end',
            skills: [
              {
                name: 'Java',
                keys: ['back', 'language'],
                level: SkillLevelEnum.intermediate,
              },
            ],
          },
        ],
      },
      {
        when: [{ name: 'VSCode', keys: ['ide'] }],
        then: [
          { title: 'others', skills: [{ name: 'VSCode', keys: ['ide'] }] },
        ],
      },
      {
        when: [
          {
            name: 'Angular',
            keys: ['front', 'framework'],
            level: SkillLevelEnum.expert,
          },
          { name: 'jquery', keys: ['front', 'library'] },
          {
            name: 'JavaScript',
            keys: ['front', 'language'],
            level: SkillLevelEnum.advanced,
          },
          { name: 'Java', keys: ['back', 'language'] },
          {
            name: 'Node.js',
            keys: ['back', 'language', 'library'],
            level: SkillLevelEnum.advanced,
          },
          { name: 'VSCode', keys: ['ide'] },
        ],
        then: [
          {
            title: 'front-end',
            skills: [
              { name: 'Angular', keys: ['front', 'framework'], level: 100 },
              {
                name: 'JavaScript',
                keys: ['front', 'language'],
                level: SkillLevelEnum.advanced,
              },
            ],
          },
          {
            title: 'back-end',
            skills: [
              {
                name: 'Node.js',
                keys: ['back', 'language', 'library'],
                level: SkillLevelEnum.advanced,
              },
            ],
          },
          {
            title: 'others',
            skills: [
              { name: 'jquery', keys: ['front', 'library'] },
              { name: 'Java', keys: ['back', 'language'] },
              { name: 'VSCode', keys: ['ide'] },
            ],
          },
        ],
      },
    ].forEach((scenario) => {
      it(`should return ${JSON.stringify(
        scenario.then
      )}, when skills=${JSON.stringify(scenario.when)}`, () => {
        // Given

        // When
        const actual = service.getSkillGroups(scenario.when);

        // Then
        expect(actual).toEqual(scenario.then);
      });
    });
  });

  describe('getSkills()', () => {
    it('should retrieve skill from work experiences', () => {
      // Given
      const expected = getMockSkills().filter((s) => !s.onlyForWorkExperience);

      // When
      const actual = service.getSkills([
        { skills: getMockSkills() } as WorkExperience,
        { skills: getMockSkills() } as WorkExperience,
        { skills: getMockSkills() } as WorkExperience,
      ]);

      // THen
      expect(actual).toEqual(expected);
    });
  });
});
