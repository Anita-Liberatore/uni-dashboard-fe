import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Corso {
  nome: string;
  cfu: number;
  semestre: number;
  superato: boolean;
  voto?: number;
  lode?: boolean;
}

interface AnnoCorsi {
  anno: number;
  corsi: Corso[];
}

@Component({
  selector: 'app-piano',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piano.component.html',
  styleUrl: './piano.component.css'
})
export class PianoComponent {

  piano: AnnoCorsi[] = [
    {
      anno: 1,
      corsi: [
        { nome: 'Analisi Matematica I',    cfu: 12, semestre: 1, superato: true,  voto: 26 },
        { nome: 'Programmazione I',         cfu: 9,  semestre: 1, superato: true,  voto: 30, lode: true },
        { nome: 'Algebra Lineare',          cfu: 9,  semestre: 1, superato: true,  voto: 27 },
        { nome: 'Analisi Matematica II',    cfu: 12, semestre: 2, superato: true,  voto: 26 },
        { nome: 'Fisica I',                 cfu: 9,  semestre: 2, superato: false },
        { nome: 'Architettura dei Computer',cfu: 6,  semestre: 2, superato: false },
      ]
    },
    {
      anno: 2,
      corsi: [
        { nome: 'Programmazione II',        cfu: 9,  semestre: 1, superato: true,  voto: 30, lode: true },
        { nome: 'Basi di Dati',             cfu: 9,  semestre: 1, superato: true,  voto: 28 },
        { nome: 'Reti di Calcolatori',      cfu: 6,  semestre: 1, superato: true,  voto: 27 },
        { nome: 'Sistemi Operativi',        cfu: 9,  semestre: 2, superato: false },
        { nome: 'Ingegneria del Software',  cfu: 9,  semestre: 2, superato: false },
        { nome: 'Statistica',               cfu: 6,  semestre: 2, superato: false },
      ]
    },
    {
      anno: 3,
      corsi: [
        { nome: 'Algoritmi e Strutture Dati', cfu: 9, semestre: 1, superato: true, voto: 30, lode: true },
        { nome: 'Intelligenza Artificiale',   cfu: 6, semestre: 1, superato: false },
        { nome: 'Sicurezza Informatica',      cfu: 6, semestre: 1, superato: false },
        { nome: 'Progetto di laurea I',       cfu: 6, semestre: 2, superato: false },
        { nome: 'Corso a scelta 1',           cfu: 6, semestre: 2, superato: false },
        { nome: 'Corso a scelta 2',           cfu: 6, semestre: 2, superato: false },
      ]
    }
  ];

  cfuAnno(anno: AnnoCorsi): number {
    return anno.corsi.reduce((s, c) => s + c.cfu, 0);
  }

  cfuSuperatiAnno(anno: AnnoCorsi): number {
    return anno.corsi.filter(c => c.superato).reduce((s, c) => s + c.cfu, 0);
  }

  progressAnno(anno: AnnoCorsi): number {
    return Math.round((this.cfuSuperatiAnno(anno) / this.cfuAnno(anno)) * 100);
  }

  corsiSuperati(anno: AnnoCorsi): number {
    return anno.corsi.filter(c => c.superato).length;
  }

  gradeColor(voto: number): string {
    if (voto === 30) return 'text-emerald-700 bg-emerald-50';
    if (voto >= 27) return 'text-sky-700 bg-sky-50';
    if (voto >= 24) return 'text-amber-700 bg-amber-50';
    return 'text-red-700 bg-red-50';
  }

  annoColor(index: number): string {
    return ['bg-indigo-500', 'bg-sky-500', 'bg-emerald-500'][index] ?? 'bg-slate-400';
  }

  annoLightColor(index: number): string {
    return ['bg-indigo-50 text-indigo-700', 'bg-sky-50 text-sky-700', 'bg-emerald-50 text-emerald-700'][index] ?? 'bg-slate-50 text-slate-700';
  }

  annoBarColor(index: number): string {
    return ['bg-indigo-500', 'bg-sky-500', 'bg-emerald-500'][index] ?? 'bg-slate-400';
  }
}
