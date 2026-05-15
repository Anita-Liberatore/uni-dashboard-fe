import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { StudentService } from '../../services/student.service';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    StatCardComponent,
    SectionCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly svc = inject(StudentService);

  readonly student  = toSignal(this.svc.getProfile(),       { requireSync: true });
  readonly academic = toSignal(this.svc.getAcademicRecord(), { requireSync: true });
  readonly upcoming = toSignal(this.svc.getExamsUpcoming(),  { requireSync: true });

  private readonly allExams = toSignal(this.svc.getExamsPassed(), { requireSync: true });

  /** Last 4 exams shown on the dashboard */
  readonly recentExams = computed(() => this.allExams().slice(0, 4));

  // ── Computed values for stat cards ────────────────────────────────────────

  readonly gpa = computed(() => this.academic().gpa.toFixed(1));

  readonly creditsEarned  = computed(() => this.academic().credits.current);
  readonly creditsTotal   = computed(() => this.academic().credits.total);
  readonly creditsPct     = computed(() =>
    Math.round((this.academic().credits.current / this.academic().credits.total) * 100)
  );

  readonly examsPassed    = computed(() => this.academic().courses.current);
  readonly examsTotal     = computed(() => this.academic().courses.total);
  readonly examsRemaining = computed(() => this.academic().courses.total - this.academic().courses.current);
  readonly honorCount     = computed(() => this.allExams().filter(e => e.lode).length);

  // ── Template helpers ──────────────────────────────────────────────────────

  /** Square color class for the grade indicator in the recent-exams list */
  gradeSquareClass(grade: number): string {
    if (grade === 30) return 'text-emerald-600 bg-emerald-50';
    if (grade >= 27)  return 'text-sky-600 bg-sky-50';
    if (grade >= 24)  return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  }
}
