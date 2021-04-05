import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { getMockCurriculumVitaeData } from '../mock/cv-data.mock.spec';
import { getMockPrimaryLinks, getMockSecondaryLinks } from '../mock/link.mock.spec';
import { CurriculumVitaeData, PreparedCurriculumVitaeData, SkillGroup } from '../model/cv-data';
import { Link } from '../model/link';
import { PersonalData, WebsiteAccount, WebsiteEnum } from '../model/personal-data';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeDataService {

  private _data$ = new ReplaySubject<PreparedCurriculumVitaeData>();
  public get data$(): Observable<PreparedCurriculumVitaeData> {
    return this._data$.asObservable();
  }

  constructor() {
    this.loadData(getMockCurriculumVitaeData());
  }

  private loadData(data: CurriculumVitaeData) {
    this._data$.next({
      personalData: data.personalData,
      contactLinks: this.getContactLinks(data.personalData),
      websiteLinks: this.getWebsiteLinks(data.personalData.accounts),
      careerSummary: data.careerSummary,
      workExperiences: data.workExperiences,
      skillGroups: this.getSkillGroups(data.skills),
      degrees: data.degrees,
      languages: data.languages
    });
  }

  public getContactLinks(personalData: PersonalData): Link[] {
    return [
      ...this.getAdressLink(personalData.address),
      ...this.getEmailLink(personalData.email),
      ...this.getPhoneNumberLink(personalData.phoneNumber),
    ];
  }

  public getWebsiteLinks(accounts: WebsiteAccount[]): Link[] {
    return accounts.map(account => {
      return this.getWebsiteLink(account);
    });
  }

  public getSkillGroups(skills: Skill[]): SkillGroup[] {
    const frontSkillGroup = { title: 'front-end', skills: skills.filter(s => s.keys.includes('front') && s.level) };
    const backSkillGroup = { title: 'back-end', skills: skills.filter(s => s.keys.includes('back') && s.level) };
    const otherSkillGroup = {
      title: 'others', skills: skills
        .filter(skill => !frontSkillGroup.skills.find(s => s.name === skill.name) && !backSkillGroup.skills.find(s => s.name === skill.name))
    };
    return [frontSkillGroup, backSkillGroup, otherSkillGroup].filter(sg => sg.skills.length > 0);
  }

  private getWebsiteLink(account: WebsiteAccount) {
    let result: Link;
    switch (account.website) {
      case WebsiteEnum.linkedin:
        result = { icon: "fa-linkedin", label: `linkedin.com/in/${account.account}`, url: `http://www.linkedin.com/in/${account.account}` };
        break;
      case WebsiteEnum.github:
        result = { icon: "fa-github", label: `github.com/${account.account}`, url: `https://github.com/${account.account}` };
        break;
      case WebsiteEnum.twitter:
        result = { icon: "fa-twitter", label: `@${account.account}`, url: `https://twitter.com/${account.account}` };
        break;
      case WebsiteEnum.codepen:
      default:
        result = { icon: "fa-codepen", label: `codepen.io/${account.account}`, url: `https://codepen.io/${account.account}` };
        break;
    }
    return result;
  }

  private getPhoneNumberLink(phoneNumber?: string): Link[] {
    return phoneNumber
      ? [{
        icon: "fa-mobile",
        label: phoneNumber,
        url: `tel:${phoneNumber.replace(/[\s()]/gm, '')}`
      }]
      : [];
  }

  private getEmailLink(email?: string): Link[] {
    return email
      ? [{ icon: "fa-envelope", label: email, url: `mailto:${email}` }]
      : [];
  }

  private getAdressLink(address?: string): Link[] {
    return address
      ? [{
        icon: "fa-map-marker", label: address,
        url: `https://www.google.fr/maps/place/${encodeURI(address)}`
      }]
      : [];
  }
}
