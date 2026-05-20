import { language } from "./language";

export class projectCard {
  title: string;
  type: string;
  ongoing: boolean;
  description: string;
  skills: language[];
  githubLink: string;
  imageLink: string | null = null;

  constructor(title: string, 
            type: string, 
            ongoing: boolean, 
            description: string, 
            skills: language[], 
            githubLink: string, 
            imageLink: string | null = null) {
    this.title = title;
    this.type = type;
    this.ongoing = ongoing;
    this.description = description;
    this.skills = skills;
    this.githubLink = githubLink;
    this.imageLink = imageLink;
  }
}