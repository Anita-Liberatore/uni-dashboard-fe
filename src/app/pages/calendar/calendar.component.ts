import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { PillTabsComponent, Tab } from '../../components/pill-tabs/pill-tabs.component';
import { EventCardComponent } from '../../custom/event-card/event-card.component';
import { StudentService } from '../../services/student.service';
import { CalendarEvent } from '../../models/calendar.model';

const IT_MONTHS = [
  'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre',
];

export interface EventGroup {
  month: string;
  events: CalendarEvent[];
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, PillTabsComponent, EventCardComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {

  private readonly svc       = inject(StudentService);
  private readonly allEvents = toSignal(this.svc.getCalendarEvents(), { initialValue: [] });

  // ── Filter ────────────────────────────────────────────────────────────────

  readonly activeFilter = signal<string>('all');

  readonly filterTabs: Tab[] = [
    { key: 'all',      label: 'Tutti'    },
    { key: 'Exam',     label: 'Esami'    },
    { key: 'Deadline', label: 'Scadenze' },
    { key: 'Lecture',  label: 'Lezioni'  },
  ];

  // ── Summary counts ────────────────────────────────────────────────────────

  readonly totalCount    = computed(() => this.allEvents().length);
  readonly examCount     = computed(() => this.allEvents().filter(e => e.type === 'Exam').length);
  readonly deadlineCount = computed(() => this.allEvents().filter(e => e.type === 'Deadline').length);
  readonly urgentCount   = computed(() => this.allEvents().filter(e => e.urgent).length);

  // ── Filtered + grouped by month ───────────────────────────────────────────

  readonly eventGroups = computed((): EventGroup[] => {
    const filter = this.activeFilter();
    const events = filter === 'all'
      ? this.allEvents()
      : this.allEvents().filter(e => e.type === filter);

    // Preserve chronological order; group by "Month Year"
    const map = new Map<string, CalendarEvent[]>();
    for (const ev of events) {
      const label = this.toMonthLabel(new Date(ev.date));
      if (!map.has(label)) map.set(label, []);
      map.get(label)!.push(ev);
    }

    return Array.from(map, ([month, evs]) => ({ month, events: evs }));
  });

  // ── Helpers ───────────────────────────────────────────────────────────────

  private toMonthLabel(d: Date): string {
    return `${IT_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }
}
