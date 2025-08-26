import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages: language[] = [
    new language('devicon-angularjs-plain colored', '#c4473a', 'AngularJS', true),
    new language('devicon-azuredevops-plain colored', '#0078d4', 'Azure DevOps', false),
    new language('devicon-bash-plain colored', '#4EAA25', 'Bash', true),
    new language('devicon-csharp-plain colored', '#9B4F96', 'C#', true),
    new language('devicon-css3-plain colored', '#264DE4', 'CSS3', true),
    new language('devicon-dot-net-plain colored', '#512BD4', 'ASP.NET Core', true),
    new language('devicon-entityframeworkcore-line colored', '#68217A', 'Entity Framework', true),
    new language('devicon-figma-plain colored', '#E34F26', 'Figma', true),
    new language('devicon-firebase-plain colored', '#FFCA28', 'Firebase', false),
    new language('devicon-html5-plain colored', '#E34F26', 'HTML5', true),
    new language('devicon-java-plain colored', '#5382a1', 'Java', true),
    new language('devicon-javascript-plain colored', '#F0DB4F', 'JavaScript', true),
    new language('devicon-kotlin-plain colored', '#0095D5', 'Kotlin', true),
    new language('devicon-lua-plain colored', '#000080', 'Lua', false),
    new language('devicon-microsoftsqlserver-plain colored', '#CC2927', 'SQL Server', true),
    new language('devicon-mongodb-plain colored', '#47A248', 'MongoDB', false),
    new language('devicon-mysql-plain colored', '#4479A1', 'MySQL', true),
    new language('devicon-sass-plain colored', '#CD6799', 'SCSS', true),
    new language('devicon-typescript-plain colored', '#007acc', 'TypeScript', true),
    new language('devicon-ubuntu-plain colored', '#E95420', 'Ubuntu', true),
  ];
}

/* use image tag for figma since multiple colors
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
 */         
