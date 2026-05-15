import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StudentService } from '../../services/student.service';
import { CalendarEvent } from '../../models/calendar.model';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {

  private readonly svc = inject(StudentService);

  readonly events = toSignal(this.svc.getCalendarEvents(), { requireSync: true });

  typeClass(type: CalendarEvent['type']): string {
    return {
      Exam:     'bg-indigo-50 text-indigo-700',
      Deadline: 'bg-amber-50  text-amber-700',
      Lecture:  'bg-sky-50    text-sky-700',
    }[type];
  }

  typeDot(type: CalendarEvent['type']): string {
    return {
      Exam:     'bg-indigo-500',
      Deadline: 'bg-amber-500',
      Lecture:  'bg-sky-500',
    }[type];
  }
}
