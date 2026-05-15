import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { Exam } from '../../models/exam.model';

interface UpcomingExam {
  course: string;
  date: string;
  credits: number;
  urgent: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    PageHeaderComponent,
    StatCardComponent,
    SectionCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  student = {
    name: 'Anita',
    surname: 'Liberatore',
    area: 'Computer Engineering',
    year: 3,
    studentId: 'S1234567',
    graduationDate: 'Jun 2025'
  };

  recentExams: Exam[] = [
    { course: 'Algorithms & Data Structures', date: 'Jan 18, 2024', grade: 30, lode: true,  credits: 9 },
    { course: 'Databases',                    date: 'Jun 20, 2023', grade: 28, lode: false, credits: 9 },
    { course: 'Programming II',               date: 'Feb 15, 2023', grade: 30, lode: true,  credits: 9 },
    { course: 'Computer Networks',            date: 'Jan 12, 2023', grade: 27, lode: false, credits: 6 },
  ];

  upcomingExams: UpcomingExam[] = [
    { course: 'Operating Systems',       date: 'May 28, 2024', credits: 9, urgent: true  },
    { course: 'Software Engineering',    date: 'Jun 15, 2024', credits: 9, urgent: false },
    { course: 'Artificial Intelligence', date: 'Jul 10, 2024', credits: 6, urgent: false },
  ];

  /** Square color class for the grade indicator in the recent-exams list */
  gradeSquareClass(grade: number): string {
    if (grade === 30) return 'text-emerald-600 bg-emerald-50';
    if (grade >= 27)  return 'text-sky-600 bg-sky-50';
    if (grade >= 24)  return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  }
}
