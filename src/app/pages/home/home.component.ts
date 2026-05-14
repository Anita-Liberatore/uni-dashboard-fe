import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  student = {
    name: 'Anita',
    surname: 'Liberatore',
    area: 'Ingegneria Informatica',
    anno: 3,
    semestre: 1,
    matricola: 'S1234567',
    graduationDate: 'Giu 2025'
  };

  stats = [
    { label: 'Media voti', value: '29.8', sub: 'su 30', color: 'indigo', trend: '+0.3 ultimo semestre' },
    { label: 'CFU acquisiti', value: '53', sub: 'su 180', color: 'emerald', trend: '29% completato' },
    { label: 'Esami superati', value: '6', sub: 'su 22', color: 'sky', trend: '4 con lode' },
    { label: 'Esami da dare', value: '16', sub: 'rimanenti', color: 'amber', trend: 'Prossimo: Mag 2024' }
  ];

  recentExams = [
    { corso: 'Algoritmi e Strutture Dati', data: '18 Gen 2024', voto: 30, lode: true, cfu: 9 },
    { corso: 'Basi di Dati', data: '20 Giu 2023', voto: 28, lode: false, cfu: 9 },
    { corso: 'Programmazione II', data: '15 Feb 2023', voto: 30, lode: true, cfu: 9 },
    { corso: 'Reti di Calcolatori', data: '12 Gen 2023', voto: 27, lode: false, cfu: 6 },
  ];

  upcomingExams = [
    { corso: 'Sistemi Operativi', data: '28 Mag 2024', cfu: 9, urgent: true },
    { corso: 'Ingegneria del Software', data: '15 Giu 2024', cfu: 9, urgent: false },
    { corso: 'Intelligenza Artificiale', data: '10 Lug 2024', cfu: 6, urgent: false },
  ];

  gradeColor(voto: number): string {
    if (voto === 30) return 'text-emerald-600 bg-emerald-50';
    if (voto >= 27) return 'text-sky-600 bg-sky-50';
    if (voto >= 24) return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  }
}
