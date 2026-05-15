import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

interface CalendarEvent {
  course: string;
  type: 'Exam' | 'Deadline' | 'Lecture';
  date: string;
  time: string;
  room?: string;
  urgent: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {

  events: CalendarEvent[] = [
    { course: 'Operating Systems',       type: 'Exam',     date: 'May 28, 2024', time: '09:00', room: 'Aula A1',  urgent: true  },
    { course: 'Software Engineering',    type: 'Deadline', date: 'Jun 5, 2024',  time: '23:59',                   urgent: true  },
    { course: 'Artificial Intelligence', type: 'Exam',     date: 'Jun 15, 2024', time: '10:30', room: 'Aula B3',  urgent: false },
    { course: 'Statistics',              type: 'Exam',     date: 'Jul 3, 2024',  time: '09:00', room: 'Aula C2',  urgent: false },
    { course: 'Bachelor Thesis I',       type: 'Deadline', date: 'Sep 30, 2024', time: '12:00',                   urgent: false },
  ];

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
