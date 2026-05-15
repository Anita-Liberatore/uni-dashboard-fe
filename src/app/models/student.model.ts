export interface Student {
  name: string;
  surname: string;
  area: string;
  studentId: string;
  email: string;
  pec: string;
  address: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  taxCode: string;
  status: 'ACTIVE' | 'INACTIVE';
  year: number;
  semester: number;
  enrolledSince: string;
  graduationDate: string;
  advisor: string;
}

export interface AcademicRecord {
  program: string;
  degree: string;
  faculty: string;
  credits: { current: number; total: number };
  courses: { current: number; total: number };
  electives: { current: number; total: number };
  gpa: number;
}
