import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-sm font-bold" [ngClass]="colorClass">
      {{ grade }}<span *ngIf="lode">L</span>
    </span>
  `
})
export class GradeBadgeComponent {
  @Input() grade = 0;
  @Input() lode = false;

  get colorClass(): string {
    if (this.grade === 30) return 'text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200';
    if (this.grade >= 27)  return 'text-sky-700 bg-sky-50 ring-1 ring-sky-200';
    if (this.grade >= 24)  return 'text-amber-700 bg-amber-50 ring-1 ring-amber-200';
    return 'text-red-700 bg-red-50 ring-1 ring-red-200';
  }

  /** Returns the matching Tailwind fill class for a progress bar */
  static barClass(grade: number): string {
    if (grade === 30) return 'bg-emerald-500';
    if (grade >= 27)  return 'bg-sky-500';
    if (grade >= 24)  return 'bg-amber-500';
    return 'bg-red-400';
  }
}
