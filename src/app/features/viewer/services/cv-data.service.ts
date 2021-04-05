import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { getMockCurriculumVitaeData } from '../mock/cv-data.mock.spec';
import { getMockPrimaryLinks, getMockSecondaryLinks } from '../mock/link.mock.spec';
import { CurriculumVitaeData, PreparedCurriculumVitaeData, SkillGroup } from '../model/cv-data';
import { Link } from '../model/link';
import { PersonalData, WebsiteAccount, WebsiteEnum } from '../model/personal-data';

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
      skillGroups: this.getSkillGroups(data),
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
      let result: Link;
      switch (account.website) {
        case WebsiteEnum.linkedin:
        default:
          result = { icon: "fa-linkedin", label: "linkedin.com/in/jpoyard", url: "http://www.linkedin.com/in/jpoyard" }
          break;
      }
      return result;
    });
  }

  private getSkillGroups(data: CurriculumVitaeData): SkillGroup[] {
    return [
      { title: 'front-end', skills: data.skills },
      { title: 'back-end', skills: data.skills },
      { title: 'other', skills: data.skills }
    ];
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
