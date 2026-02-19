import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {NgClass, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-timeline-card',
  imports: [
    CardComponent,
    NgClass,
    NgSwitch,
    NgForOf,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './timeline-card.component.html',
  standalone: true,
  styleUrl: './timeline-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimelineCardComponent {

  @Input() timelineData: any;

}
