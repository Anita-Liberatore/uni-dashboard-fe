import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  template: `
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-900">{{ title }}</h1>
      <p class="text-sm text-slate-500 mt-1">{{ subtitle }}</p>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
