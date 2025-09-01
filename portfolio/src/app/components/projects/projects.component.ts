import { Component } from '@angular/core';
import { getLanguagesByNames, language } from 'src/app/models/language';
import { projectCard } from 'src/app/models/projectCard';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: projectCard[] = [
    new projectCard(
      'Important Dog (Discord Bot)',
      true,
      'A discord bot made with Javascript that is self-hosted on a personal server running on Ubuntu. The discord bot provides many functionalities such as various commands calling APIs, sleep tracking with the utilization of MongoDB to handle the data. Utilizing MySQL, it also holds basic information of each member who interacts with it, allowing custom services such as minecraft server management and the ability to set reminders or recurring events to the individual in question.',
      getLanguagesByNames(['JavaScript', 'MySQL', 'MongoDB', 'Bash', 'Ubuntu']),
      '',
      '../assets/images/project_bot.png'
    ),
    new projectCard(
      'Hearthstone like Card Game',
      false,
      'A digital card game inspired by Hearthstone, built with Angular (client) and ASP.NET Core with SQL Server (backend). Features include strategic gameplay, deck building, a currency system, Elo ranking, and more fun things! Real-time functionality is powered by SignalR over WebSockets. Developed in a team of four using Scrum methodology and managed with Azure DevOps',
      getLanguagesByNames(['AngularJS', 'TypeScript', 'Asp.Net Core', 'C#', 'Entity Framework', 'SQL Server', 'Azure DevOps']),
      'https://github.com/Yaneric-Roussy/SCI_Serveur',
      '../assets/images/project_cards.png'
    ),
    new projectCard(
      'Portfolio Website',
      true,
      'A personal portfolio website built with AngularTS and self-hosted on a personal domain, featuring reusable child components, structured models, and UI libraries for a clean and interactive user experience.',
      getLanguagesByNames(['AngularJS', 'TypeScript', 'HTML5', 'SCSS', 'Ubuntu']),
      'https://github.com/Yan2arb4/portfolio_site.git',
      '../assets/images/project_portfolio.png'
    )
  ]
}