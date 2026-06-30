import { Component } from '@angular/core';
import { tech, techSetList } from 'src/app/models/tech';
import { techType } from 'src/app/models/techType';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  techTypes = Object.values(techType);

  getTechByType(type: techType): tech[] {
    return techSetList.filter(t => t.type === type && t.show);
  }

  formatTechType(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1) + 's';
  }
}