import { language } from "./language";

export class projectCard {
  title: string;
  ongoing: boolean;
  description: string;
  skills: language[];
  githubLink: string;
  imageLink: string;

  constructor(title: string, ongoing: boolean, description: string, skills: language[], githubLink: string, imageLink: string) {
    this.title = title;
    this.ongoing = ongoing;
    this.description = description;
    this.skills = skills;
    this.githubLink = githubLink;
    this.imageLink = imageLink;
  }
}