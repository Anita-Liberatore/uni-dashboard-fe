export interface Course {
  name: string;
  credits: number;
  semester: number;
  passed: boolean;
  grade?: number;
  lode?: boolean;
}

export interface YearPlan {
  year: number;
  courses: Course[];
}
