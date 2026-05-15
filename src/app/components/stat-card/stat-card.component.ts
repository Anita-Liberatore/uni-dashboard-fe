import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html'
})
export class StatCardComponent {
  /** Main numeric value displayed prominently */
  @Input() value = '';
  /** Label shown below the value */
  @Input() label = '';
  /** Optional suffix appended to the value (e.g. "/ 30") */
  @Input() suffix = '';
  /** Optional small badge text (e.g. "+0.3", "4 with honors") */
  @Input() badge = '';
  /** Tailwind classes applied to the badge */
  @Input() badgeClass = 'text-slate-500 bg-slate-100';
  /** Tailwind classes applied to the icon wrapper */
  @Input() iconBg = 'bg-slate-50';
  /** Progress bar fill percentage (0–100). Omit to hide the bar. */
  @Input() progress: number | null = null;
  /** Tailwind class for the progress bar fill color */
  @Input() progressClass = 'bg-indigo-500';
  /** Optional note shown at the bottom (e.g. "Excellent standing") */
  @Input() note = '';
  /** Tailwind classes for the note text */
  @Input() noteClass = 'text-slate-400';
}
