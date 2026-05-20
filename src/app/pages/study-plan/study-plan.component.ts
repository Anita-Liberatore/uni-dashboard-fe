import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { YearPlanCardComponent } from '../../custom/year-plan-card/year-plan-card.component';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, YearPlanCardComponent],
  templateUrl: './study-plan.component.html',
  styleUrl: './study-plan.component.css'
})
export class StudyPlanComponent {

  private readonly svc = inject(StudentService);

  readonly plan = toSignal(this.svc.getStudyPlan(), { initialValue: [] });
}
