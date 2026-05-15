export interface CalendarEvent {
  course: string;
  type: 'Exam' | 'Deadline' | 'Lecture';
  date: string;
  time: string;
  room?: string;
  urgent: boolean;
}
