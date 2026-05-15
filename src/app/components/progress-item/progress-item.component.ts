import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm font-medium text-slate-700">{{ label }}</p>
        <p class="text-sm font-bold text-slate-900">
          {{ current }}
          <span class="font-normal text-slate-400">/ {{ total }}</span>
        </p>
      </div>
      <div class="w-full bg-slate-100 rounded-full h-2">
        <div class="h-2 rounded-full" [ngClass]="barClass"
             [style.width.%]="(current / total) * 100"></div>
      </div>
    </div>
  `
})
export class ProgressItemComponent {
  @Input() label = '';
  @Input() current = 0;
  @Input() total = 1;
  /** Tailwind class for the filled portion of the bar (e.g. 'bg-indigo-500') */
  @Input() barClass = 'bg-indigo-500';
}
