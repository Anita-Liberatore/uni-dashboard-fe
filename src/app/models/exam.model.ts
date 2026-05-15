export interface Exam {
  course: string;
  area?: string;
  date: string;
  grade: number;
  lode: boolean;
  credits: number;
  year?: number;
}

export interface UpcomingExam {
  course: string;
  date: string;
  credits: number;
  urgent: boolean;
}
