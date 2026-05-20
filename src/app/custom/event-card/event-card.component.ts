import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarEvent } from '../../models/calendar.model';

const IT_MONTHS_SHORT = ['gen','feb','mar','apr','mag','giu',
                         'lug','ago','set','ott','nov','dic'];

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-xs
                border border-slate-100 border-l-4 transition-shadow hover:shadow-sm"
         [ngClass]="borderLeftClass">

      <!-- Date block -->
      <div class="shrink-0 w-12 text-center">
        <p class="text-2xl font-bold leading-none" [ngClass]="dayColor">{{ day }}</p>
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-0.5">{{ month }}</p>
      </div>

      <!-- Vertical divider -->
      <div class="w-px self-stretch bg-slate-100 shrink-0"></div>

      <!-- Course + meta -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-slate-800 truncate">{{ event.course }}</p>
        <p class="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
          <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <span>{{ event.time }}</span>
          <ng-container *ngIf="event.room">
            <span class="text-slate-300">·</span>
            <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z"/>
            </svg>
            <span>{{ event.room }}</span>
          </ng-container>
        </p>
      </div>

      <!-- Type badge -->
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" [ngClass]="typeClass">
        {{ typeLabel }}
      </span>

      <!-- Urgency badge -->
      <span *ngIf="event.urgent"
            class="flex items-center gap-1 text-xs font-bold text-amber-600
                   bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full shrink-0">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
        Imminente
      </span>
    </div>
  `,
})
export class EventCardComponent {
  @Input({ required: true }) event!: CalendarEvent;

  get day(): string {
    return new Date(this.event.date).getDate().toString();
  }

  get month(): string {
    return IT_MONTHS_SHORT[new Date(this.event.date).getMonth()];
  }

  get dayColor(): string {
    return this.event.urgent ? 'text-amber-600' : 'text-slate-800';
  }

  get borderLeftClass(): string {
    return {
      Exam:     'border-l-indigo-500',
      Deadline: 'border-l-amber-500',
      Lecture:  'border-l-sky-500',
    }[this.event.type];
  }

  get typeLabel(): string {
    return { Exam: 'Esame', Deadline: 'Scadenza', Lecture: 'Lezione' }[this.event.type];
  }

  get typeClass(): string {
    return {
      Exam:     'bg-indigo-50 text-indigo-700',
      Deadline: 'bg-amber-50  text-amber-700',
      Lecture:  'bg-sky-50    text-sky-700',
    }[this.event.type];
  }
}
