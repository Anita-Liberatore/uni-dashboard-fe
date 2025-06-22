import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { AcademicCardComponent } from '../../custom/academic-card/academic-card.component';
import { ProfileTabComponent } from '../../custom/profile-tab/profile-tab.component';
import { FormatBirthDatePipe } from "../../format-birth-date.pipe";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardComponent, CommonModule, AcademicCardComponent, ProfileTabComponent, FormatBirthDatePipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponent {

  student = {
    name: 'Anita',
    surname: 'Liberatore',
    universityArea: 'Computer Science',
    studentId: 'S1234567',
    email: 'anita.liberatore@example.com',
    address: 'Via Roma 123, Torino',
    phone: '+39 320 123 4567',
    birthDate: '1998-04-22',
    enrollmentStatus: 'ACTIVE'
  };

  academicInfo = {
    programDetails: {
      program: 'Computer Science',
      degree: 'Bachelor of Science',
      faculty: 'Faculty of Science and Technology',
      department: 'Department of Computer Science',
    },
    enrollmentStatus: {
      year: 3,
      semester: 1,
      status: 'Active',
    },
    datesAndAdvisor: {
      enrolled: 'Sep 1, 2021',
      graduation: 'Jun 30, 2024',
      advisor: 'Prof. Laura Bianchi',
    },
    requirements: {
      credits: { current: 53, total: 180 },
      courses: { current: 6, total: 22 },
      electives: { current: 0, total: 4 },
    }
  };
  
  activeTab: string = 'academic';

  activeClass =
    'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500';
  inactiveClass =
    'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-400 dark:text-gray-500';

}
