import { Component } from '@angular/core';
import { tech, techSetList } from 'src/app/models/tech';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  languages : tech[] = techSetList;
}