import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Input() reference!: string;
  @Input() color!: string;
  @Input() name!: string;
  @Input() favorite!: boolean;
}