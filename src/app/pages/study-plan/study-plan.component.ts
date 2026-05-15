import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { GradeBadgeComponent } from '../../components/grade-badge/grade-badge.component';

interface Course {
  name: string;
  credits: number;
  semester: number;
  passed: boolean;
  grade?: number;
  lode?: boolean;
}

interface YearPlan {
  year: number;
  courses: Course[];
}

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, GradeBadgeComponent],
  templateUrl: './study-plan.component.html',
  styleUrl: './study-plan.component.css'
})
export class StudyPlanComponent {

  plan: YearPlan[] = [
    {
      year: 1,
      courses: [
        { name: 'Calculus I',             credits: 12, semester: 1, passed: true,  grade: 26 },
        { name: 'Programming I',          credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
        { name: 'Linear Algebra',         credits: 9,  semester: 1, passed: true,  grade: 27 },
        { name: 'Calculus II',            credits: 12, semester: 2, passed: true,  grade: 26 },
        { name: 'Physics I',              credits: 9,  semester: 2, passed: false },
        { name: 'Computer Architecture', credits: 6,  semester: 2, passed: false },
      ]
    },
    {
      year: 2,
      courses: [
        { name: 'Programming II',         credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
        { name: 'Databases',              credits: 9,  semester: 1, passed: true,  grade: 28 },
        { name: 'Computer Networks',      credits: 6,  semester: 1, passed: true,  grade: 27 },
        { name: 'Operating Systems',      credits: 9,  semester: 2, passed: false },
        { name: 'Software Engineering',   credits: 9,  semester: 2, passed: false },
        { name: 'Statistics',             credits: 6,  semester: 2, passed: false },
      ]
    },
    {
      year: 3,
      courses: [
        { name: 'Algorithms & Data Structures', credits: 9, semester: 1, passed: true,  grade: 30, lode: true },
        { name: 'Artificial Intelligence',      credits: 6, semester: 1, passed: false },
        { name: 'Cybersecurity',                credits: 6, semester: 1, passed: false },
        { name: 'Bachelor Thesis I',            credits: 6, semester: 2, passed: false },
        { name: 'Elective I',                   credits: 6, semester: 2, passed: false },
        { name: 'Elective II',                  credits: 6, semester: 2, passed: false },
      ]
    }
  ];

  totalCredits(y: YearPlan): number {
    return y.courses.reduce((s, c) => s + c.credits, 0);
  }

  earnedCredits(y: YearPlan): number {
    return y.courses.filter(c => c.passed).reduce((s, c) => s + c.credits, 0);
  }

  progress(y: YearPlan): number {
    return Math.round((this.earnedCredits(y) / this.totalCredits(y)) * 100);
  }

  passedCount(y: YearPlan): number {
    return y.courses.filter(c => c.passed).length;
  }

  /** Tailwind progress-bar color per year index */
  yearBarClass(i: number): string {
    return ['bg-indigo-500', 'bg-sky-500', 'bg-emerald-500'][i] ?? 'bg-slate-400';
  }

  /** Tailwind pill color per year index */
  yearPillClass(i: number): string {
    return [
      'bg-indigo-50 text-indigo-700',
      'bg-sky-50 text-sky-700',
      'bg-emerald-50 text-emerald-700'
    ][i] ?? 'bg-slate-100 text-slate-600';
  }

  /** Courses for a given semester within a year */
  bySemester(y: YearPlan, sem: number): Course[] {
    return y.courses.filter(c => c.semester === sem);
  }
}
