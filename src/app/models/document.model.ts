export interface StudentDocument {
  name: string;
  type: string;
  size: string;
  date: string;
  status: 'Verified' | 'Pending';
}
