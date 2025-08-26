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
      'A discord bot that provides various functionalities such as minecraft server management, various commands calling APIs, and more.',
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