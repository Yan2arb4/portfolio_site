import { Component, EventEmitter, Output } from '@angular/core';
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
      'PoroBot',
      'Console App',
      true,
      'A discord bot made with Javascript that is self-hosted on a personal server running on Ubuntu. The discord bot provides many functionalities such as various commands calling APIs, sleep tracking with the utilization of MongoDB to handle the data. Utilizing MySQL, it also holds basic information of each member who interacts with it, allowing custom services such as minecraft server management and the ability to set reminders or recurring events to the individual in question.',
      getLanguagesByNames(['JavaScript', 'MySQL', 'MongoDB', 'Bash', 'Ubuntu']),
      '',
      'assets/images/important_dog.jpg'
    ),
    new projectCard(
      'PoroHost',
      'Full-Stack Website App',
      false,
      'A full-stack game server management platform built with React and ASP.NET Core (C#), using Entity Framework and MySQL for backend services. The objective of the project is to host and manage containerized Minecraft servers on Linux using Docker with real-time server management.',
      getLanguagesByNames(['Asp.Net Core', 'Entity Framework', 'C#', 'mysql', 'React', 'HTML5', 'SCSS','Docker', 'Azure DevOps']),
      '',
      'assets/images/porohost_logo.png'
    ),
    new projectCard(
      'W65C02 Processor',
      'Hardware',
      true,
      'This projects serves me as exploring the fundamental concepts behind computer architecture through hands-on experimentation with low-level hardware and software. Using the famous 65C02 microprocessor. The project focuses on understanding how a computer operates at a basic level, that implies memory mapping, data transfer, clocking, and assembly programming.',
      getLanguagesByNames(['W65C02 Microprocessor', '6502 assembly', 'Electronics']),
      '',
      'assets/images/hardware.jpg'
    )
  ]

  selectedProject: projectCard | null = null;

  onCardClick(project: projectCard) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null
  }
}