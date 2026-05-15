import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { YearPlanCardComponent } from '../../components/year-plan-card/year-plan-card.component';
import { YearPlan } from '../../models/course.model';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, YearPlanCardComponent],
  templateUrl: './study-plan.component.html',
  styleUrl: './study-plan.component.css'
})
export class StudyPlanComponent {

  plan: YearPlan[] = [
    {
      year: 1,
      courses: [
        { name: 'Calculus I',              credits: 12, semester: 1, passed: true,  grade: 26 },
        { name: 'Programming I',           credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
        { name: 'Linear Algebra',          credits: 9,  semester: 1, passed: true,  grade: 27 },
        { name: 'Calculus II',             credits: 12, semester: 2, passed: true,  grade: 26 },
        { name: 'Physics I',               credits: 9,  semester: 2, passed: false },
        { name: 'Computer Architecture',   credits: 6,  semester: 2, passed: false },
      ]
    },
    {
      year: 2,
      courses: [
        { name: 'Programming II',          credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
        { name: 'Databases',               credits: 9,  semester: 1, passed: true,  grade: 28 },
        { name: 'Computer Networks',       credits: 6,  semester: 1, passed: true,  grade: 27 },
        { name: 'Operating Systems',       credits: 9,  semester: 2, passed: false },
        { name: 'Software Engineering',    credits: 9,  semester: 2, passed: false },
        { name: 'Statistics',              credits: 6,  semester: 2, passed: false },
      ]
    },
    {
      year: 3,
      courses: [
        { name: 'Algorithms & Data Structures', credits: 9, semester: 1, passed: true, grade: 30, lode: true },
        { name: 'Artificial Intelligence',      credits: 6, semester: 1, passed: false },
        { name: 'Cybersecurity',                credits: 6, semester: 1, passed: false },
        { name: 'Bachelor Thesis I',            credits: 6, semester: 2, passed: false },
        { name: 'Elective I',                   credits: 6, semester: 2, passed: false },
        { name: 'Elective II',                  credits: 6, semester: 2, passed: false },
      ]
    }
  ];
}
