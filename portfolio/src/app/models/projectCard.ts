class projectCard {
  title: string;
  ongoing: boolean;
  description: string;
  keyLanguages: string[];
  githubLink: string;
  imageLink: string;

  constructor(title: string, ongoing: boolean, description: string, keyLanguages: string[], githubLink: string, imageLink: string) {
    this.title = title;
    this.ongoing = ongoing;
    this.description = description;
    this.keyLanguages = keyLanguages;
    this.githubLink = githubLink;
    this.imageLink = imageLink;
  }
}