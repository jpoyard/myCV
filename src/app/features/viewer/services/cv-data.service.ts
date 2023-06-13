import { Injectable, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { SupportedLanguageEnum } from 'src/app/model/language';
import { LanguageService } from '../../../core/services/language.service';
import {
  CurriculumVitaeData,
  PreparedCurriculumVitaeData,
  SkillGroup,
} from '../model/cv-data';
import { Link } from '../model/link';
import {
  PersonalData,
  WebsiteAccount,
  WebsiteEnum,
} from '../model/personal-data';
import { Skill } from '../model/skill';
import { WorkExperience } from '../model/work-experience';
import { CvDataLoaderService } from './cv-data-loader.service';

@Injectable({
  providedIn: 'root',
})
export class CurriculumVitaeDataService {

  public data: Signal<PreparedCurriculumVitaeData|null>;

  constructor(languageService: LanguageService, loader: CvDataLoaderService) {
    this.data = toSignal<PreparedCurriculumVitaeData, PreparedCurriculumVitaeData|null>(
      toObservable(languageService.currentLang).pipe(
        map((lang) => lang as SupportedLanguageEnum),
        switchMap((lang) => ((loader.getCV(lang)))),
        map((cv) => this.getData(cv))
      ),
      {initialValue: null});
  }

  private getData(data: CurriculumVitaeData): PreparedCurriculumVitaeData {
    return ({
      personalData: data.personalData,
      contactLinks: this.getContactLinks(data.personalData),
      websiteLinks: this.getWebsiteLinks(data.personalData.accounts),
      careerSummary: data.careerSummary,
      workExperiences: data.workExperiences,
      skillGroups: this.getSkillGroups(this.getSkills(data.workExperiences)),
      degrees: data.degrees,
      languages: data.languages,
    });
  }

  public getSkills(workExperiences: WorkExperience[]): Skill[] {
    let result: Skill[] = [];
    let skillNames: string[] = [];
    workExperiences.forEach((workExperience) => {
      result = [
        ...result,
        ...workExperience.skills
          .filter((s) => !s.onlyForWorkExperience)
          .filter((s) => !skillNames.includes(s.name)),
      ];
      skillNames = result.map((r) => r.name);
    });
    return result;
  }

  public getContactLinks(personalData: PersonalData): Link[] {
    return [
      ...this.getAdressLink(personalData.address),
      ...this.getEmailLink(personalData.email),
      ...this.getPhoneNumberLink(personalData.phoneNumber),
    ];
  }

  public getWebsiteLinks(accounts: WebsiteAccount[]): Link[] {
    return accounts.map((account) => {
      return this.getWebsiteLink(account);
    });
  }

  public getSkillGroups(skills: Skill[]): SkillGroup[] {
    const frontSkillGroup = {
      title: 'front-end',
      skills: skills.filter((s) => s.keys.includes('front') && s.level),
    };
    const backSkillGroup = {
      title: 'back-end',
      skills: skills.filter((s) => s.keys.includes('back') && s.level),
    };
    const otherSkillGroup = {
      title: 'others',
      skills: skills.filter(
        (skill) =>
          !frontSkillGroup.skills.find((s) => s.name === skill.name) &&
          !backSkillGroup.skills.find((s) => s.name === skill.name)
      ),
    };
    return [frontSkillGroup, backSkillGroup, otherSkillGroup].filter(
      (sg) => sg.skills.length > 0
    );
  }

  private getWebsiteLink(account: WebsiteAccount): Link {
    let result: Link;
    switch (account.website) {
      case WebsiteEnum.linkedin:
        result = {
          icon: 'fa-linkedin',
          label: `linkedin.com/in/${account.account}`,
          url: `http://www.linkedin.com/in/${account.account}`,
        };
        break;
      case WebsiteEnum.github:
        result = {
          icon: 'fa-github',
          label: `github.com/${account.account}`,
          url: `https://github.com/${account.account}`,
        };
        break;
      case WebsiteEnum.twitter:
        result = {
          icon: 'fa-twitter',
          label: `@${account.account}`,
          url: `https://twitter.com/${account.account}`,
        };
        break;
      case WebsiteEnum.codepen:
      default:
        result = {
          icon: 'fa-codepen',
          label: `codepen.io/${account.account}`,
          url: `https://codepen.io/${account.account}`,
        };
        break;
    }
    return result;
  }

  private getPhoneNumberLink(phoneNumber?: string): Link[] {
    return phoneNumber
      ? [
          {
            icon: 'fa-mobile',
            label: phoneNumber,
            url: `tel:${phoneNumber.replace(/[\s()]/gm, '')}`,
          },
        ]
      : [];
  }

  private getEmailLink(email?: string): Link[] {
    return email
      ? [{ icon: 'fa-envelope', label: email, url: `mailto:${email}` }]
      : [];
  }

  private getAdressLink(address?: string): Link[] {
    return address
      ? [
          {
            icon: 'fa-map-marker',
            label: address,
            url: `https://www.google.fr/maps/place/${encodeURI(address)}`,
          },
        ]
      : [];
  }
}
