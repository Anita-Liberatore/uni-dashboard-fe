import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-card.component.html'
})
export class SectionCardComponent {
  /** Primary heading shown in the card header */
  @Input() title = '';
  /** Optional secondary text below the title */
  @Input() subtitle = '';
  /**
   * When true, wraps the body slot in an overflow-x-auto div.
   * Useful for tables that may exceed the card width.
   */
  @Input() scrollableX = false;
}
