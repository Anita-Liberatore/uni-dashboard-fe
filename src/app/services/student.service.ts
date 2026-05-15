/**
 * StudentService — single source of truth for all student data.
 *
 * Each method maps to a future Go API endpoint (listed in the JSDoc).
 * To connect the real backend, replace `of(MOCK_*)` with:
 *   return this.http.get<T>(`${this.baseUrl}/...`);
 * and uncomment the HttpClient injection below.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Student, AcademicRecord } from '../models/student.model';
import { Exam, UpcomingExam }      from '../models/exam.model';
import { YearPlan }                from '../models/course.model';
import { StudentDocument }         from '../models/document.model';
import { CalendarEvent }           from '../models/calendar.model';

// ─────────────────────────────────────────────────────────────────────────────
// Mock data
// Replace with real HTTP responses once the Go API is ready.
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_STUDENT: Student = {
  name:           'Anita',
  surname:        'Liberatore',
  area:           'Computer Engineering',
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
  program:   'Computer Engineering',
  degree:    'Bachelor of Science (L-8)',
  faculty:   'Faculty of Science & Technology',
  credits:   { current: 53,  total: 180 },
  courses:   { current: 6,   total: 22  },
  electives: { current: 0,   total: 4   },
  gpa:       29.8,
};

const MOCK_EXAMS_PASSED: Exam[] = [
  { course: 'Algorithms & Data Structures', area: 'CS',   date: 'Jan 18, 2024', grade: 30, lode: true,  credits: 9,  year: 3 },
  { course: 'Databases',                    area: 'CS',   date: 'Jun 20, 2023', grade: 28, lode: false, credits: 9,  year: 2 },
  { course: 'Computer Networks',            area: 'Nets', date: 'Jan 12, 2023', grade: 27, lode: false, credits: 6,  year: 2 },
  { course: 'Programming II',               area: 'CS',   date: 'Feb 15, 2023', grade: 30, lode: true,  credits: 9,  year: 2 },
  { course: 'Calculus II',                  area: 'Math', date: 'Jul 10, 2022', grade: 26, lode: false, credits: 12, year: 1 },
  { course: 'Programming I',                area: 'CS',   date: 'Jan 20, 2022', grade: 30, lode: true,  credits: 9,  year: 1 },
];

const MOCK_EXAMS_UPCOMING: UpcomingExam[] = [
  { course: 'Operating Systems',       date: 'May 28, 2024', credits: 9, urgent: true  },
  { course: 'Software Engineering',    date: 'Jun 15, 2024', credits: 9, urgent: false },
  { course: 'Artificial Intelligence', date: 'Jul 10, 2024', credits: 6, urgent: false },
];

const MOCK_STUDY_PLAN: YearPlan[] = [
  {
    year: 1,
    courses: [
      { name: 'Calculus I',            credits: 12, semester: 1, passed: true,  grade: 26             },
      { name: 'Programming I',         credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Linear Algebra',        credits: 9,  semester: 1, passed: true,  grade: 27             },
      { name: 'Calculus II',           credits: 12, semester: 2, passed: true,  grade: 26             },
      { name: 'Physics I',             credits: 9,  semester: 2, passed: false                        },
      { name: 'Computer Architecture', credits: 6,  semester: 2, passed: false                        },
    ],
  },
  {
    year: 2,
    courses: [
      { name: 'Programming II',      credits: 9,  semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Databases',           credits: 9,  semester: 1, passed: true,  grade: 28             },
      { name: 'Computer Networks',   credits: 6,  semester: 1, passed: true,  grade: 27             },
      { name: 'Operating Systems',   credits: 9,  semester: 2, passed: false                        },
      { name: 'Software Engineering',credits: 9,  semester: 2, passed: false                        },
      { name: 'Statistics',          credits: 6,  semester: 2, passed: false                        },
    ],
  },
  {
    year: 3,
    courses: [
      { name: 'Algorithms & Data Structures', credits: 9, semester: 1, passed: true,  grade: 30, lode: true },
      { name: 'Artificial Intelligence',      credits: 6, semester: 1, passed: false                        },
      { name: 'Cybersecurity',                credits: 6, semester: 1, passed: false                        },
      { name: 'Bachelor Thesis I',            credits: 6, semester: 2, passed: false                        },
      { name: 'Elective I',                   credits: 6, semester: 2, passed: false                        },
      { name: 'Elective II',                  credits: 6, semester: 2, passed: false                        },
    ],
  },
];

const MOCK_DOCUMENTS: StudentDocument[] = [
  { name: 'Enrollment Certificate',       type: 'PDF', size: '245 KB', date: 'Oct 15, 2023', status: 'Verified' },
  { name: 'Study Plan 2023/24',           type: 'PDF', size: '128 KB', date: 'Sep 5, 2023',  status: 'Verified' },
  { name: 'Identity Document',            type: 'JPG', size: '1.2 MB', date: 'Aug 20, 2023', status: 'Pending'  },
  { name: 'English Certificate B2',       type: 'PDF', size: '340 KB', date: 'Jun 12, 2023', status: 'Verified' },
  { name: 'Tuition Receipt A.Y. 2023/24', type: 'PDF', size: '89 KB',  date: 'Sep 30, 2023', status: 'Verified' },
];

const MOCK_CALENDAR: CalendarEvent[] = [
  { course: 'Operating Systems',       type: 'Exam',     date: 'May 28, 2024', time: '09:00', room: 'Aula A1', urgent: true  },
  { course: 'Software Engineering',    type: 'Deadline', date: 'Jun 5, 2024',  time: '23:59',                  urgent: true  },
  { course: 'Artificial Intelligence', type: 'Exam',     date: 'Jun 15, 2024', time: '10:30', room: 'Aula B3', urgent: false },
  { course: 'Statistics',              type: 'Exam',     date: 'Jul 3, 2024',  time: '09:00', room: 'Aula C2', urgent: false },
  { course: 'Bachelor Thesis I',       type: 'Deadline', date: 'Sep 30, 2024', time: '12:00',                  urgent: false },
];

// ─────────────────────────────────────────────────────────────────────────────
// Service
// ─────────────────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class StudentService {

  // ── Uncomment when the Go API is ready ──────────────────────────────────
  // private readonly http    = inject(HttpClient);
  // private readonly baseUrl = '/api/v1';
  // ─────────────────────────────────────────────────────────────────────────

  /** GET /api/v1/me */
  getProfile(): Observable<Student> {
    return of(MOCK_STUDENT);
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
