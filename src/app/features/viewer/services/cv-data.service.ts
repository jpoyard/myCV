import { Injectable, Signal, computed } from '@angular/core';
import {
  CurriculumVitaeData,
  PreparedCurriculumVitaeData,
  SkillGroup,
} from '@model/cv-data';
import { Link } from '@model/link';
import { PersonalData } from '@model/personal-data';
import { Skill } from '@model/skill';
import { WorkExperience } from '@model/work-experience';
import { CvDataLoaderService } from './cv-data-loader.service';

@Injectable({
  providedIn: 'root',
})
export class CurriculumVitaeDataService {
  public data: Signal<PreparedCurriculumVitaeData | null>;

  constructor(loader: CvDataLoaderService) {
    loader.request();
    this.data = computed(() => {
      const raw = loader.data();
      return raw ? this.getData(raw) : null;
    });
  }

  private getData(data: CurriculumVitaeData): PreparedCurriculumVitaeData {
    return {
      personalData: data.personalData,
      contactLinks: this.getContactLinks(data.personalData),
      websiteLinks: data.personalData.accounts,
      careerSummary: data.careerSummary,
      workExperiences: data.workExperiences,
      skillGroups: this.getSkillGroups(this.getSkills(data.workExperiences)),
      degrees: data.degrees,
      languages: data.languages,
    };
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

  private getPhoneNumberLink(phoneNumber?: string): Link[] {
    return phoneNumber
      ? [
          {
            icon: 'phone',
            label: phoneNumber,
            url: `tel:${phoneNumber.replace(/[\s()]/gm, '')}`,
          },
        ]
      : [];
  }

  private getEmailLink(email?: string): Link[] {
    return email
      ? [{ icon: 'mail', label: email, url: `mailto:${email}` }]
      : [];
  }

  private getAdressLink(address?: string): Link[] {
    return address
      ? [
          {
            icon: 'home',
            label: address,
            url: `https://www.google.fr/maps/place/${encodeURI(address)}`,
          },
        ]
      : [];
  }
}
