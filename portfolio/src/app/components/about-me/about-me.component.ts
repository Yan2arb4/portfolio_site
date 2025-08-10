import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
languages: language[] = [
    new language('devicon-angularjs-plain colored', '#c4473a'),
    new language('devicon-typescript-plain colored', '#007acc'),
    new language('devicon-csharp-plain colored', '#239120'),
    new language('devicon-dot-net-plain colored', '#512BD4'), // ASP.NET Core
    new language('devicon-java-plain colored', '#5382a1'),
    new language('devicon-kotlin-plain colored', '#0095D5'),
    new language('devicon-mysql-plain colored', '#4479A1'),
    new language('devicon-microsoftsqlserver-plain colored', '#CC2927'), // SQL Server
    new language('devicon-javascript-plain colored', '#F0DB4F'),
    new language('devicon-bash-plain colored', '#4EAA25'),
    new language('devicon-html5-plain colored', '#E34F26'),
    new language('devicon-css3-plain colored', '#264DE4'),
    new language('devicon-sass-plain colored', '#CD6799'), // SCSS (Sass)
    new language('devicon-lua-plain colored', '#000080'),
    new language('devicon-ubuntu-plain colored', '#E95420'),
    new language('devicon-entityframework-plain colored', '#68217A'),
    new language('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', 'multicolor'),
    new language('devicon-mongodb-plain colored', '#47A248'),
    new language('devicon-firebase-plain colored', '#FFCA28'),
  ];
}

/* use image tag for figma since multiple colors
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
 */         

class language {
  reference: string;
  color: string;

  constructor(languageReference: string, languageColor: string){
    this.reference = languageReference;
    this.color = languageColor;
  }
}
