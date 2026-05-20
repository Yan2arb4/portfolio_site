import { Component } from '@angular/core';
import { experience } from 'src/app/models/experience';
import { getLanguagesByNames } from 'src/app/models/language';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: experience[] = [
    new experience(
      'Firmware Developper Intern',
      'Distech Controls Inc.',
      'Brossard, Qc',
      'January 2026',
      'April 2026',
      [
        'Designed and implemented a complete CI pipeline on Azure DevOps to automate build and test validation.',
        'Developed a unit testing infrastructure based on ZTest, with execution via Twister on a native_sim target (emulation).',
        'Created and implemented multiple tests covering more than 80% of custom drivers.',
        'Automated multi-configuration builds to test simultaneous instantiation of multiple drivers to detect conflicts.'
      ],
      getLanguagesByNames(['Visual Studio Code', 'C Programming Language', 'STM32 Nucleo Series', 'Electronics', 'Zephyr RTOS', 'ZTest Framework', 'Bash', 'Ubuntu', 'Scrum Methodology', 'Git']),
      'assets/images/distech_logo_small.png',
      'assets/images/internship_distech.jpg',
      false
    ),
  ];
}
