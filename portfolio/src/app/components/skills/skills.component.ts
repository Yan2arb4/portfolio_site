import { Component } from '@angular/core';
import { language, languagesSetList } from 'src/app/models/language';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages : language[] = languagesSetList;
}

/* use image tag for figma since multiple colors
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
 */         
