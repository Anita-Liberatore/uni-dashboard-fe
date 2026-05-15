import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { ExamsTableComponent } from '../../components/exams-table/exams-table.component';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [PageHeaderComponent, StatCardComponent, SectionCardComponent, ExamsTableComponent],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {

  exams: Exam[] = [
    { course: 'Algorithms & Data Structures', area: 'CS',   date: 'Jan 18, 2024', grade: 30, lode: true,  credits: 9,  year: 3 },
    { course: 'Databases',                    area: 'CS',   date: 'Jun 20, 2023', grade: 28, lode: false, credits: 9,  year: 2 },
    { course: 'Computer Networks',            area: 'Nets', date: 'Jan 12, 2023', grade: 27, lode: false, credits: 6,  year: 2 },
    { course: 'Programming II',               area: 'CS',   date: 'Feb 15, 2023', grade: 30, lode: true,  credits: 9,  year: 2 },
    { course: 'Calculus II',                  area: 'Math', date: 'Jul 10, 2022', grade: 26, lode: false, credits: 12, year: 1 },
    { course: 'Programming I',                area: 'CS',   date: 'Jan 20, 2022', grade: 30, lode: true,  credits: 9,  year: 1 },
  ];

  get average(): string {
    return (this.exams.reduce((s, e) => s + e.grade, 0) / this.exams.length).toFixed(1);
  }

  get totalCredits(): number {
    return this.exams.reduce((s, e) => s + e.credits, 0);
  }

  get honorCount(): number {
    return this.exams.filter(e => e.lode).length;
  }
}
