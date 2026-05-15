import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeBadgeComponent } from '../grade-badge/grade-badge.component';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-exams-table',
  standalone: true,
  imports: [CommonModule, GradeBadgeComponent],
  templateUrl: './exams-table.component.html'
})
export class ExamsTableComponent {
  @Input() exams: Exam[] = [];

  /** Tailwind fill class for the per-row score bar */
  barClass(grade: number): string {
    if (grade === 30) return 'bg-emerald-500';
    if (grade >= 27)  return 'bg-sky-500';
    if (grade >= 24)  return 'bg-amber-500';
    return 'bg-red-400';
  }
}
