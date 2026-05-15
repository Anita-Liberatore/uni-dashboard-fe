import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  key: string;
  label: string;
}

@Component({
  selector: 'app-pill-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-1 mb-6 bg-slate-100 p-1 rounded-lg w-fit">
      <button
        *ngFor="let t of tabs"
        (click)="tabChange.emit(t.key)"
        class="px-4 py-2 rounded-md text-sm font-medium transition-all"
        [ngClass]="activeTab === t.key
          ? 'bg-white text-slate-900 shadow-sm'
          : 'text-slate-500 hover:text-slate-700'">
        {{ t.label }}
      </button>
    </div>
  `
})
export class PillTabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab = '';
  @Output() tabChange = new EventEmitter<string>();
}
