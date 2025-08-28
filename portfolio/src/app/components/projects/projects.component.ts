import { Component } from '@angular/core';
import { projectCard } from 'src/app/models/projectCard';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: projectCard[] = [
    new projectCard(
      'Discord Bot',
      true,
      'A discord bot made with Javascript that is self-hosted on a personal server running on Ubuntu. The discord bot provides many functionalities such as various commands calling APIs, sleep tracking with the utilization of MongoDB to handle the data. Utilizing MySQL, it also holds basic information  of each member who interacts with it, allowing custom services such as minecraft server management and the ability to set reminders or recurring events to the individual in question.',
      ['JavaScript', 'MySQL', 'Node.js', 'Discord.js', 'Ubuntu'],
      'no_link_for_now',
      'https://placebear.com/500/500'
    ),
    new projectCard(
      'Hearthstone like Card Game',
      false,
      'A digital card game inspired by Hearthstone, featuring strategic gameplay, deck building, currency system, and more.',
      ['Angular', 'TypeScript', 'Asp.Net Core', 'C#', 'Entity Framework', 'SQL Server', 'Azure DevOps'],
      'no_link_for_now',
      'https://placebear.com/500/500'
    ),
    new projectCard(
      'Portfolio Website',
      true,
      'A personal portfolio website to showcase my skills and projects, built with Angular and hosted on GitHub Pages.',
      ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      'balls',
      'https://placebear.com/500/500'
    )
  ]
}