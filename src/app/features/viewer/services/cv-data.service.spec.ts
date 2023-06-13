import { signal, WritableSignal } from '@angular/core';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { SupportedLanguageEnum } from '../../../model/language';
import {
  getMockCurriculumVitaeData,
  getMockPreparedCurriculumVitaeData,
} from '../mock/cv-data.mock';
import { getMockSkills } from '../mock/skill.mock';
import { CurriculumVitaeData } from '../model/cv-data';
import { Link } from '../model/link';
import { PersonalData, WebsiteEnum } from '../model/personal-data';
import { SkillLevelEnum } from '../model/skill';
import { WorkExperience } from '../model/work-experience';
import { CvDataLoaderService } from './cv-data-loader.service';
import { CurriculumVitaeDataService } from './cv-data.service';

describe(CurriculumVitaeDataService.name, () => {
  let service: CurriculumVitaeDataService;
  let mockLanguageService: { currentLang: WritableSignal<SupportedLanguageEnum> };
  let mockCvDataLoaderService: {
    getCV(lang: SupportedLanguageEnum): Observable<CurriculumVitaeData>;
  };

  beforeEach(() => {
    mockLanguageService = { currentLang: signal(SupportedLanguageEnum.english) };
    mockCvDataLoaderService = { getCV: jest.fn() };
    jest
      .spyOn(mockCvDataLoaderService, 'getCV')
      .mockImplementationOnce(() => of(getMockCurriculumVitaeData()));

    TestBed.configureTestingModule({
      providers: [
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: CvDataLoaderService, useValue: mockCvDataLoaderService },
        CurriculumVitaeDataService,
      ],
    });
    service = TestBed.inject(CurriculumVitaeDataService);
  });

  xdescribe('data', () => { // TODO
    Object.values(SupportedLanguageEnum).forEach((lang) => {
      it(`should retrieve ${lang} CV when selected lang is ${lang}`, fakeAsync(async () => {
        // Given
        flushMicrotasks();

        // When
        mockLanguageService.currentLang.set(lang);
        flushMicrotasks();

        // Then
        expect(mockCvDataLoaderService.getCV).toHaveBeenCalledWith(lang);
        expect((service.data())).toEqual(getMockPreparedCurriculumVitaeData());
      }));
    });
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
          icon: 'fa-map-marker',
          label: '15 Avenue des Champs-Élysées, Paris',
          url: `https://www.google.fr/maps/place/15%20Avenue%20des%20Champs-%C3%89lys%C3%A9es,%20Paris`,
        },
      },
      {
        when: { email: 'john.doe@yahoo.com' } as PersonalData,
        then: {
          icon: 'fa-envelope',
          label: 'john.doe@yahoo.com',
          url: 'mailto:john.doe@yahoo.com',
        },
      },
      {
        when: { phoneNumber: '(+33)6 12 34 56 78' } as PersonalData,
        then: {
          icon: 'fa-mobile',
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

  describe('getWebsiteLinks()', () => {
    [
      {
        when: [],
        then: [],
      },
      {
        when: [{ website: WebsiteEnum.linkedin, account: 'jpoyard' }],
        then: [
          {
            icon: 'fa-linkedin',
            label: 'linkedin.com/in/jpoyard',
            url: 'http://www.linkedin.com/in/jpoyard',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.linkedin, account: 'gishin01' }],
        then: [
          {
            icon: 'fa-linkedin',
            label: 'linkedin.com/in/gishin01',
            url: 'http://www.linkedin.com/in/gishin01',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.github, account: 'jpoyard' }],
        then: [
          {
            icon: 'fa-github',
            label: 'github.com/jpoyard',
            url: 'https://github.com/jpoyard',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.github, account: 'gishin01' }],
        then: [
          {
            icon: 'fa-github',
            label: 'github.com/gishin01',
            url: 'https://github.com/gishin01',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.twitter, account: 'jpoyard' }],
        then: [
          {
            icon: 'fa-twitter',
            label: '@jpoyard',
            url: 'https://twitter.com/jpoyard',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.twitter, account: 'gishin01' }],
        then: [
          {
            icon: 'fa-twitter',
            label: '@gishin01',
            url: 'https://twitter.com/gishin01',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.codepen, account: 'jpoyard' }],
        then: [
          {
            icon: 'fa-codepen',
            label: 'codepen.io/jpoyard',
            url: 'https://codepen.io/jpoyard',
          },
        ],
      },
      {
        when: [{ website: WebsiteEnum.codepen, account: 'gishin01' }],
        then: [
          {
            icon: 'fa-codepen',
            label: 'codepen.io/gishin01',
            url: 'https://codepen.io/gishin01',
          },
        ],
      },
    ].forEach((scenario) => {
      it(`should return ${JSON.stringify(
        scenario.then
      )}, when accounts=${JSON.stringify(scenario.when)}`, () => {
        // Given

        // When
        const actual = service.getWebsiteLinks(scenario.when);

        // Then
        expect(actual).toEqual(scenario.then);
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
