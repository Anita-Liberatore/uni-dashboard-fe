import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { TimelineCardComponent } from '../../custom/timeline-card/timeline-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, CardComponent, TimelineCardComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  student = {
    name: 'Anita',
    surname: 'Liberatore',
    universityArea: 'Computer Science',
    studentId: 'S1234567',
    enrollmentStatus: 'ACTIVE'
  };

  stats = [
    {
      label: 'Credits Earned',
      value: '53',
      total: '180',
      icon: 'credits',
      color: 'blue'
    },
    {
      label: 'Courses Completed',
      value: '6',
      total: '22',
      icon: 'courses',
      color: 'green'
    },
    {
      label: 'Current Year',
      value: '3',
      total: null,
      icon: 'year',
      color: 'purple'
    },
    {
      label: 'GPA',
      value: '29.8',
      total: '30',
      icon: 'gpa',
      color: 'orange'
    }
  ];

  recentActivity = [
    {
      title: 'Esame superato: Algoritmi e Strutture Dati',
      description: 'Voto: 30/30 e Lode',
      date: 'Jan 18, 2024',
      type: 'success'
    },
    {
      title: 'Borsa di studio assegnata',
      description: 'Merito accademico — €2.500',
      date: 'Jul 15, 2023',
      type: 'award'
    },
    {
      title: 'Esame superato: Basi di Dati',
      description: 'Voto: 28/30',
      date: 'Jun 20, 2023',
      type: 'success'
    },
    {
      title: 'Piano di Studi approvato',
      description: 'Anno accademico 2023/24',
      date: 'Sep 5, 2023',
      type: 'info'
    }
  ];

  upcomingDeadlines = [
    { label: 'Iscrizione esame: Sistemi Operativi', date: 'May 20, 2024', urgent: true },
    { label: 'Pagamento tasse II rata', date: 'Jun 1, 2024', urgent: true },
    { label: 'Scadenza piano di studi 2024/25', date: 'Jul 15, 2024', urgent: false },
    { label: 'Sessione estiva esami', date: 'Jun 10 – Jul 31, 2024', urgent: false }
  ];
}
