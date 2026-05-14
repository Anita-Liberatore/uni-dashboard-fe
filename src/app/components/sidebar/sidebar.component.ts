import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  student = {
    name: 'Anita Liberatore',
    id: 'S1234567',
    area: 'Computer Science'
  };

  navItems = [
    {
      path: '/',
      exact: true,
      label: 'Dashboard',
      icon: 'home'
    },
    {
      path: '/esami',
      exact: false,
      label: 'Esami sostenuti',
      icon: 'check-badge'
    },
    {
      path: '/piano',
      exact: false,
      label: 'Piano di studi',
      icon: 'clipboard'
    },
    {
      path: '/profile',
      exact: false,
      label: 'Profilo',
      icon: 'user'
    }
  ];
}
