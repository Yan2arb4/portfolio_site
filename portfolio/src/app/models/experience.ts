import { language } from "./language";

export class experience {
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  bullets: string[];
  stack: language[];
  logo: string | null;
  photo: string | null;             // team/internship photo
  showPhotoPlaceholder: boolean;    // true = show placeholder until photo is ready

  constructor(role: string,
            company: string,
            location: string,
            from: string,
            to: string,
            bullets: string[],
            stack: language[],
            logo: string | null,
            photo: string | null,
            showPhotoPlaceholder: boolean) {

    this.role = role;
    this.company = company;
    this.location = location;
    this.from = from;
    this.to = to;
    this.bullets = bullets;
    this.stack = stack;
    this.logo = logo;
    this.photo = photo;
    this.showPhotoPlaceholder = showPhotoPlaceholder;
  }
}