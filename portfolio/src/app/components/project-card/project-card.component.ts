import { Component, Input } from '@angular/core';
import { projectCard } from 'src/app/models/projectCard';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
@Input() project!: projectCard;

  checkProject(): void {
    window.open(this.project.githubLink, "_blank");
  }
}