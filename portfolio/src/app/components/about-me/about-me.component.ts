import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  languages: language[] = [
    new language('devicon-angularjs-plain colored', '#c4473a', 'AngularJS'),
    new language('devicon-typescript-plain colored', '#007acc', 'TypeScript'),
    new language('devicon-csharp-plain colored', '#239120', 'C#'),
    new language('devicon-dot-net-plain colored', '#512BD4', 'ASP.NET Core'),
    new language('devicon-java-plain colored', '#5382a1', 'Java'),
    new language('devicon-kotlin-plain colored', '#0095D5', 'Kotlin'),
    new language('devicon-mysql-plain colored', '#4479A1', 'MySQL'),
    new language('devicon-microsoftsqlserver-plain colored', '#CC2927', 'SQL Server'),
    new language('devicon-javascript-plain colored', '#F0DB4F', 'JavaScript'),
    new language('devicon-bash-plain colored', '#4EAA25', 'Bash'),
    new language('devicon-html5-plain colored', '#E34F26', 'HTML5'),
    new language('devicon-css3-plain colored', '#264DE4', 'CSS3'),
    new language('devicon-sass-plain colored', '#CD6799', 'SCSS'),
    new language('devicon-lua-plain colored', '#000080', 'Lua'),
    new language('devicon-ubuntu-plain colored', '#E95420', 'Ubuntu'),
    new language('devicon-entityframeworkcore-line colored', '#68217A', 'Entity Framework'),
    new language('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', 'multicolor', 'Figma'),
    new language('devicon-azuredevops-plain colored', '#0078d4', 'Azure DevOps'),
    new language('devicon-mongodb-plain colored', '#47A248', 'MongoDB'),
    new language('devicon-firebase-plain colored', '#FFCA28', 'Firebase'),
  ];
}

/* use image tag for figma since multiple colors
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
 */         

class language {
  reference: string;
  color: string;
  name: string;

  constructor(languageReference: string, languageColor: string, languageName : string){
    this.reference = languageReference;
    this.color = languageColor;
    this.name = languageName;
  }
}
