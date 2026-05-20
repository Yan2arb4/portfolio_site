import { tech } from "./tech";

export class projectCard {
  title: string;
  type: string;
  ongoing: boolean;
  description: string;
  skills: tech[];
  githubLink: string;
  imageLink: string | null = null;

  constructor(title: string, 
            type: string, 
            ongoing: boolean, 
            description: string, 
            skills: tech[], 
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