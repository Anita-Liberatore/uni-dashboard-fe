import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { NAV_ITEMS, NavItem } from '../../config/nav.config';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private readonly svc = inject(StudentService);

  /** Nav items driven by nav.config.ts — add a route there, not here */
  readonly navItems: NavItem[] = NAV_ITEMS;

  // requireSync: true is safe because of() emits synchronously.
  // When switching to http.get(), remove requireSync and handle undefined.
  private readonly profile = toSignal(this.svc.getProfile(), { requireSync: true });

  readonly displayName = computed(() => {
    const p = this.profile();
    return `${p.name} ${p.surname}`;
  });

  readonly studentId = computed(() => this.profile().studentId);

  readonly initials = computed(() =>
    this.displayName()
      .split(' ')
      .slice(0, 2)
      .map(w => w[0]?.toUpperCase() ?? '')
      .join('')
  );
}
