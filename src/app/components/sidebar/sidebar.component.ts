import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NAV_ITEMS, NavItem } from '../../config/nav.config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  /** Nav items are driven entirely by nav.config.ts */
  readonly navItems: NavItem[] = NAV_ITEMS;

  /** Logged-in student shown in the footer */
  readonly student = {
    name: 'Anita Liberatore',
    initials: 'AL',
    id: 'S1234567',
  };

  /** First letter of each word in the name, max 2 characters */
  get initials(): string {
    return this.student.name
      .split(' ')
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
  }
}
