import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInBottom, fadeInBottomLeft, fadeInBottomRight } from '../animations/animations';

const DURATION_FADEIN_INTRO = '1200ms ease-in';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger("fadeInBottomLeft", [
      transition(
        "* => *", 
        useAnimation(fadeInBottomLeft, { params: { timing: DURATION_FADEIN_INTRO, x: '50px', y: '80px' }})
      ) 
    ]),
    trigger("fadeInBottomRight", [
      transition(
        "* => *",
        useAnimation(fadeInBottomRight, { params: { timing: DURATION_FADEIN_INTRO, x: '50px', y: '80px' }})
      )
    ]),
    trigger("fadeInBottom", [
      transition(
        "* => *",
        useAnimation(fadeInBottom, { params: { timing: DURATION_FADEIN_INTRO, x: '50px', y: '80px' }})
      )
    ])
  ]
})
export class IntroComponent implements OnInit {
  ng_fadeInBottomLeft: boolean = false;
  ng_fadeInBottomRight: boolean = false;
  ng_fadeInBottom: boolean = false;

  ngOnInit(): void {
    this.ng_fadeInBottomLeft!;
    this.ng_fadeInBottomRight!;
    this.ng_fadeInBottom!;
  }

  scrollToTarget() {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
