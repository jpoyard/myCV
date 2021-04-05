import { TestBed } from '@angular/core/testing';
import { getMockPersonalData } from '../mock/personal-data.mock.spec';
import { Link } from '../model/link';
import { PersonalData, WebsiteEnum } from '../model/personal-data';

import { CurriculumVitaeDataService } from './cv-data.service';

describe(CurriculumVitaeDataService.name, () => {
  let service: CurriculumVitaeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumVitaeDataService);
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
        when: { address: '15 Avenue des Champs-Élysées, Paris' } as PersonalData,
        then: {
          icon: "fa-map-marker",
          label: '15 Avenue des Champs-Élysées, Paris',
          url: `https://www.google.fr/maps/place/15%20Avenue%20des%20Champs-%C3%89lys%C3%A9es,%20Paris`
        }
      },
      {
        when: { email: 'john.doe@yahoo.com' } as PersonalData,
        then: {
          icon: "fa-envelope",
          label: 'john.doe@yahoo.com',
          url: 'mailto:john.doe@yahoo.com'
        }
      },
      {
        when: { phoneNumber: '(+33)6 12 34 56 78' } as PersonalData,
        then: {
          icon: "fa-mobile",
          label: '(+33)6 12 34 56 78',
          url: 'tel:+33612345678'
        }
      }
    ].forEach(scenario => {
      it(`should return array with ${JSON.stringify(scenario.then)}, when ${JSON.stringify(scenario.when)}`, () => {
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

    /*
{ website: WebsiteEnum.linkedin, account: "jpoyard" },
    { website: WebsiteEnum.github, account: "jpoyard" },
    { website: WebsiteEnum.twitter, account: "@jpoyard" },
    { website: WebsiteEnum.codepen, account: "jpoyard" }

    { icon: "fa-github", label: "github.com/jpoyard", url: "https://github.com/jpoyard" },
  { icon: "fa-twitter", label: "@jpoyard", url: "https://twitter.com/jpoyard" },
  { icon: "fa-codepen", label: "codepen.io/jpoyard", url: "https://codepen.io/jpoyard" }

    */

    [
      {
        when: [],
        then: []
      }, {
        when: [{ website: WebsiteEnum.linkedin, account: "jpoyard" },],
        then: [{ icon: "fa-linkedin", label: "linkedin.com/in/jpoyard", url: "http://www.linkedin.com/in/jpoyard" }]
      }
    ].forEach(scenario => {
      it(`should return array with ${JSON.stringify(scenario.then)}, when accounts=${JSON.stringify(scenario.when)}`, () => {
        // Given

        // When
        const actual = service.getWebsiteLinks(scenario.when);

        // Then
        expect(actual).toEqual(scenario.then);
      });
    });
  });
});
