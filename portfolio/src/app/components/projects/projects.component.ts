import { Component, EventEmitter, Output } from '@angular/core';
import { getTechByNames, tech } from 'src/app/models/tech';
import { projectCard } from 'src/app/models/projectCard';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: projectCard[] = [
    new projectCard(
      'HomeLab',
      'Infrastructure',
      true,
      'The Homelab frame server is currently being assembled. The logic is built around a Raspberry Pi 4 edge node and two x86 compute servers housed in a custom 10-inch rack, this homelab serves as my personal infrastructure playground. The Pi handles ingress routing and internal DNS, while the compute nodes run Docker workloads ranging from self-hosted websites and APIs to a NAS, media server, and local AI. Optical drives, hot-swap HDDs, and a full networking stack round out the physical build. On the software side, it gives me a real environment to experiment with Infrastructure-as-Code, while hosting all my personal projects under one roof.',
      getTechByNames(['Raspberry Pi', 'Docker', 'Traefik', 'Cloudflare', 'Ubuntu', 'Bash','GitHub']),
      '',
      'assets/images/homelab_picture.jpg'
    ),
    new projectCard(
      'PoroHost',
      'Full-Stack Website App',
      false,
      'A full-stack game server management platform built with React and ASP.NET Core (C#), using Entity Framework and MySQL for backend services. The objective of the project is to host and manage containerized Minecraft servers on Linux using Docker with real-time server management.',
      getTechByNames(['Asp.Net Core', 'Entity Framework', 'C#', 'mysql', 'React', 'HTML5', 'SCSS','Docker', 'Azure DevOps', 'Github']),
      '',
      'assets/images/porohost_logo.png'
    ),
    new projectCard(
      'PoroBot',
      'Console App',
      true,
      'A discord bot made with Javascript that is self-hosted on a personal server running on Ubuntu. The discord bot provides many functionalities such as various commands calling APIs, sleep tracking with the utilization of MongoDB to handle the data. Utilizing MySQL, it also holds basic information of each member who interacts with it, allowing custom services such as minecraft server management and the ability to set reminders or recurring events to the individual in question.',
      getTechByNames(['JavaScript', 'MySQL', 'MongoDB', 'Bash', 'Ubuntu', 'Github']),
      '',
      'assets/images/important_dog.jpg'
    ),
    new projectCard(
      'W65C02 Processor',
      'Hardware',
      true,
      'This projects serves me as exploring the fundamental concepts behind computer architecture through hands-on experimentation with low-level hardware and software. Using the famous 65C02 microprocessor. The project focuses on understanding how a computer operates at a basic level, that implies memory mapping, data transfer, clocking, and assembly programming.',
      getTechByNames(['W65C02 Microprocessor', '6502 assembly', 'Electronics']),
      '',
      'assets/images/hardware.jpg'
    ),
  ]

  selectedProject: projectCard | null = null;

  onCardClick(project: projectCard) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null
  }
}