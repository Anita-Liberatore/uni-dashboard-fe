import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esami',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esami.component.html',
  styleUrl: './esami.component.css'
})
export class EsamiComponent {

  esami = [
    { corso: 'Algoritmi e Strutture Dati', area: 'Informatica', data: '18 Gen 2024', voto: 30, lode: true,  cfu: 9,  anno: 3 },
    { corso: 'Basi di Dati',               area: 'Informatica', data: '20 Giu 2023', voto: 28, lode: false, cfu: 9,  anno: 2 },
    { corso: 'Reti di Calcolatori',         area: 'Reti',        data: '12 Gen 2023', voto: 27, lode: false, cfu: 6,  anno: 2 },
    { corso: 'Programmazione II',           area: 'Informatica', data: '15 Feb 2023', voto: 30, lode: true,  cfu: 9,  anno: 2 },
    { corso: 'Analisi Matematica II',       area: 'Matematica',  data: '10 Lug 2022', voto: 26, lode: false, cfu: 12, anno: 1 },
    { corso: 'Programmazione I',            area: 'Informatica', data: '20 Gen 2022', voto: 30, lode: true,  cfu: 9,  anno: 1 },
  ];

  get media(): string {
    const sum = this.esami.reduce((acc, e) => acc + e.voto, 0);
    return (sum / this.esami.length).toFixed(1);
  }

  get cfu(): number {
    return this.esami.reduce((acc, e) => acc + e.cfu, 0);
  }

  get lodi(): number {
    return this.esami.filter(e => e.lode).length;
  }

  gradeColor(voto: number): string {
    if (voto === 30) return 'text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200';
    if (voto >= 27) return 'text-sky-700 bg-sky-50 ring-1 ring-sky-200';
    if (voto >= 24) return 'text-amber-700 bg-amber-50 ring-1 ring-amber-200';
    return 'text-red-700 bg-red-50 ring-1 ring-red-200';
  }

  gradeBar(voto: number): string {
    if (voto === 30) return 'bg-emerald-500';
    if (voto >= 27) return 'bg-sky-500';
    if (voto >= 24) return 'bg-amber-500';
    return 'bg-red-400';
  }
}
