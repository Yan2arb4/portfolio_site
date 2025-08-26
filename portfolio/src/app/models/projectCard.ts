export class projectCard {
  title: string;
  ongoing: boolean;
  description: string;
  skills: string[];
  githubLink: string;
  imageLink: string;

  constructor(title: string, ongoing: boolean, description: string, skills: string[], githubLink: string, imageLink: string) {
    this.title = title;
    this.ongoing = ongoing;
    this.description = description;
    this.skills = skills;
    this.githubLink = githubLink;
    this.imageLink = imageLink;
  }
}