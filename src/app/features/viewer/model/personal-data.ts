export enum WebsiteEnum {
  linkedin = 'linkedin',
  github = 'github',
  twitter = 'twitter',
  codepen = 'codepen'
}

export interface WebsiteAccount {
  website: WebsiteEnum;
  account: string;
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  thumbnailUrl: string;
  jobTitle: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  accounts: WebsiteAccount[];
}
