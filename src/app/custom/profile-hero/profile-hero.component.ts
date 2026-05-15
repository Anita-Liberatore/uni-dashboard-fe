import { Component, Input } from '@angular/core';
import { Student, AcademicRecord } from '../../models/student.model';

@Component({
  selector: 'app-profile-hero',
  standalone: true,
  imports: [],
  templateUrl: './profile-hero.component.html'
})
export class ProfileHeroComponent {
  @Input() student!: Student;
  @Input() academic!: AcademicRecord;

  get initials(): string {
    return `${this.student.name[0]}${this.student.surname[0]}`.toUpperCase();
  }
}
