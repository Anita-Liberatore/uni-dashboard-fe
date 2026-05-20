/**
 * StudentService — single source of truth for all student data.
 *
 * Each method maps to a future Go API endpoint (listed in the JSDoc).
 * To connect the real backend, replace `of(MOCK_*)` with:
 *   return this.http.get<T>(`${this.baseUrl}/...`);
 * and uncomment the HttpClient injection below.
 */

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Student, AcademicRecord } from '../models/student.model';
import { Exam, UpcomingExam }      from '../models/exam.model';
import { YearPlan }                from '../models/course.model';
import { StudentDocument }         from '../models/document.model';
import { CalendarEvent }           from '../models/calendar.model';

// ─────────────────────────────────────────────────────────────────────────────
// Initial / empty state
// Used as initialValue in toSignal() calls so components never receive undefined
// while the first HTTP response is in flight.
// ─────────────────────────────────────────────────────────────────────────────

export const EMPTY_STUDENT: Student = {
  name: '', surname: '', area: '', studentId: '', email: '',
  pec: '', address: '', phone: '', birthDate: '', birthPlace: '',
  taxCode: '', status: 'ACTIVE', year: 0, semester: 0,
  enrolledSince: '', graduationDate: '', advisor: '',
};

// ─────────────────────────────────────────────────────────────────────────────
// Mock data
// Remove each constant as its endpoint is implemented in the Go backend.
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_STUDENT: Student = {
  name:           'Anita',
  surname:        'Liberatore',
  area:           'Ingegneria Informatica',
  studentId:      'S1234567',
  email:          'anita.liberatore@studenti.unito.it',
  pec:            'anita.liberatore@pec.unito.it',
  address:        'Via Roma 123, 10100 Turin (TO)',
  phone:          '+39 320 123 4567',
  birthDate:      '1998-04-22',
  birthPlace:     'Naples (NA)',
  taxCode:        'LBRANT98D62F839X',
  status:         'ACTIVE',
  year:           3,
  semester:       1,
  enrolledSince:  'Sep 1, 2021',
  graduationDate: 'Jun 2025',
  advisor:        'Prof. Laura Bianchi',
};

const MOCK_ACADEMIC: AcademicRecord = {
  program:   'Ingegneria Informatica',
  degree:    'Laurea Triennale (L-8)',
  faculty:   'Facoltà di Scienze e Tecnologia',
  credits:   { current: 53,  total: 180 },
  courses:   { current: 6,   total: 22  },
  electives: { current: 0,   total: 4   },
  gpa:       29.8,
};

const MOCK_EXAMS_PASSED: Exam[] = [
  { course: 'Algoritmi e Strutture Dati', area: 'Inf.',  date: 'Jan 18, 2024', grade: 30, lode: true,  credits: 9,  year: 3 },
  { course: 'Basi di Dati',              area: 'Inf.',  date: 'Jun 20, 2023', grade: 28, lode: false, credits: 9,  year: 2 },
  { course: 'Reti di Calcolatori',       area: 'Reti',  date: 'Jan 12, 2023', grade: 27, lode: false, credits: 6,  year: 2 },
  { course: 'Programmazione II',         area: 'Inf.',  date: 'Feb 15, 2023', grade: 30, lode: true,  credits: 9,  year: 2 },
  { course: 'Analisi Matematica II',     area: 'Mat.',  date: 'Jul 10, 2022', grade: 26, lode: false, credits: 12, year: 1 },
  { course: 'Programmazione I',          area: 'Inf.',  date: 'Jan 20, 2022', grade: 30, lode: true,  credits: 9,  year: 1 },
];

const MOCK_EXAMS_UPCOMING: UpcomingExam[] = [
  { course: 'Sistemi Operativi',      date: 'May 28, 2024', credits: 9, urgent: true  },
  { course: 'Ingegneria del Software', date: 'Jun 15, 2024', credits: 9, urgent: false },
  { course: 'Intelligenza Artificiale', date: 'Jul 10, 2024', credits: 6, urgent: false },
];

const MOCK_STUDY_PLAN: YearPlan[] = [
  {
    year: 1,
    courses: [
      { name: 'Analisi Matematica I',        credits: 12, semester: 1, passed: true,  grade: 26             },
      { name: 'Programmazione I',            credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Algebra Lineare',             credits: 9,  semester: 1, passed: true,  grade: 27             },
      { name: 'Analisi Matematica II',       credits: 12, semester: 2, passed: true,  grade: 26             },
      { name: 'Fisica I',                    credits: 9,  semester: 2, passed: false                        },
      { name: 'Architettura degli Elaboratori', credits: 6, semester: 2, passed: false                      },
    ],
  },
  {
    year: 2,
    courses: [
      { name: 'Programmazione II',      credits: 9, semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Basi di Dati',           credits: 9, semester: 1, passed: true,  grade: 28             },
      { name: 'Reti di Calcolatori',    credits: 6, semester: 1, passed: true,  grade: 27             },
      { name: 'Sistemi Operativi',      credits: 9, semester: 2, passed: false                        },
      { name: 'Ingegneria del Software',credits: 9, semester: 2, passed: false                        },
      { name: 'Statistica',             credits: 6, semester: 2, passed: false                        },
    ],
  },
  {
    year: 3,
    courses: [
      { name: 'Algoritmi e Strutture Dati', credits: 9, semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Intelligenza Artificiale',   credits: 6, semester: 1, passed: false                        },
      { name: 'Sicurezza Informatica',      credits: 6, semester: 1, passed: false                        },
      { name: 'Tesi di Laurea I',           credits: 6, semester: 2, passed: false                        },
      { name: 'Corso a Scelta I',           credits: 6, semester: 2, passed: false                        },
      { name: 'Corso a Scelta II',          credits: 6, semester: 2, passed: false                        },
    ],
  },
];

const MOCK_DOCUMENTS: StudentDocument[] = [
  { name: 'Certificato di iscrizione',   type: 'PDF', size: '245 KB', date: '15 ott 2023', status: 'Verified' },
  { name: 'Piano di studi 2023/24',      type: 'PDF', size: '128 KB', date: '5 set 2023',  status: 'Verified' },
  { name: "Documento d'identità",        type: 'JPG', size: '1.2 MB', date: '20 ago 2023', status: 'Pending'  },
  { name: 'Certificato Inglese B2',      type: 'PDF', size: '340 KB', date: '12 giu 2023', status: 'Verified' },
  { name: 'Ricevuta tasse A.A. 2023/24', type: 'PDF', size: '89 KB',  date: '30 set 2023', status: 'Verified' },
];

const MOCK_CALENDAR: CalendarEvent[] = [
  { course: 'Sistemi Operativi',       type: 'Exam',     date: 'May 28, 2024', time: '09:00', room: 'Aula A1', urgent: true  },
  { course: 'Ingegneria del Software', type: 'Deadline', date: 'Jun 5, 2024',  time: '23:59',                  urgent: true  },
  { course: 'Intelligenza Artificiale',type: 'Exam',     date: 'Jun 15, 2024', time: '10:30', room: 'Aula B3', urgent: false },
  { course: 'Statistica',              type: 'Exam',     date: 'Jul 3, 2024',  time: '09:00', room: 'Aula C2', urgent: false },
  { course: 'Tesi di Laurea I',        type: 'Deadline', date: 'Sep 30, 2024', time: '12:00',                  urgent: false },
];

// ─────────────────────────────────────────────────────────────────────────────
// Service
// ─────────────────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class StudentService {

  private readonly http    = inject(HttpClient);
  private readonly baseUrl = '/api/v1';

  /** GET /api/v1/me */
  getProfile(): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/me`);
  }

  /** GET /api/v1/me/academic */
  getAcademicRecord(): Observable<AcademicRecord> {
    return of(MOCK_ACADEMIC);
  }

  /** GET /api/v1/me/exams */
  getExamsPassed(): Observable<Exam[]> {
    return of(MOCK_EXAMS_PASSED);
  }

  /** GET /api/v1/me/exams/upcoming */
  getExamsUpcoming(): Observable<UpcomingExam[]> {
    return of(MOCK_EXAMS_UPCOMING);
  }

  /** GET /api/v1/me/study-plan */
  getStudyPlan(): Observable<YearPlan[]> {
    return of(MOCK_STUDY_PLAN);
  }

  /** GET /api/v1/me/documents */
  getDocuments(): Observable<StudentDocument[]> {
    return of(MOCK_DOCUMENTS);
  }

  /** GET /api/v1/me/calendar */
  getCalendarEvents(): Observable<CalendarEvent[]> {
    return of(MOCK_CALENDAR);
  }
}
