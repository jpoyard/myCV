import { Link } from "./link";

export interface PersonalData {
  firstName: string;
  lastName: string;
  thumbnailUrl: string;
  jobTitle: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  accounts: Link[];
}
