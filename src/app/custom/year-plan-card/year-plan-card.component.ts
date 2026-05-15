import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeBadgeComponent } from '../../components/grade-badge/grade-badge.component';
import { YearPlan, Course } from '../../models/course.model';

@Component({
  selector: 'app-year-plan-card',
  standalone: true,
  imports: [CommonModule, GradeBadgeComponent],
  templateUrl: './year-plan-card.component.html'
})
export class YearPlanCardComponent {
  @Input() year!: YearPlan;
  /** Zero-based index used to select the colour palette for this year */
  @Input() index = 0;

  get totalCredits(): number {
    return this.year.courses.reduce((s, c) => s + c.credits, 0);
  }

  get earnedCredits(): number {
    return this.year.courses.filter(c => c.passed).reduce((s, c) => s + c.credits, 0);
  }

  get progress(): number {
    return Math.round((this.earnedCredits / this.totalCredits) * 100);
  }

  get passedCount(): number {
    return this.year.courses.filter(c => c.passed).length;
  }

  get barClass(): string {
    return ['bg-indigo-500', 'bg-sky-500', 'bg-emerald-500'][this.index] ?? 'bg-slate-400';
  }

  get pillClass(): string {
    return [
      'bg-indigo-50 text-indigo-700',
      'bg-sky-50 text-sky-700',
      'bg-emerald-50 text-emerald-700'
    ][this.index] ?? 'bg-slate-100 text-slate-600';
  }

  bySemester(sem: number): Course[] {
    return this.year.courses.filter(c => c.semester === sem);
  }
}
