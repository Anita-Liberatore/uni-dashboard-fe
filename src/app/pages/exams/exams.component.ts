import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { ExamsTableComponent } from '../../custom/exams-table/exams-table.component';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [PageHeaderComponent, StatCardComponent, SectionCardComponent, ExamsTableComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {

  private readonly svc = inject(StudentService);

  readonly exams = toSignal(this.svc.getExamsPassed(), { requireSync: true });

  readonly average      = computed(() =>
    (this.exams().reduce((s, e) => s + e.grade, 0) / this.exams().length).toFixed(1)
  );
  readonly totalCredits = computed(() => this.exams().reduce((s, e) => s + e.credits, 0));
  readonly honorCount   = computed(() => this.exams().filter(e => e.lode).length);
}
