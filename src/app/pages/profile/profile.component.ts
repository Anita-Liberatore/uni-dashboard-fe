import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ProfileHeroComponent } from '../../custom/profile-hero/profile-hero.component';
import { PillTabsComponent, Tab } from '../../components/pill-tabs/pill-tabs.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { ProgressItemComponent } from '../../components/progress-item/progress-item.component';
import { DocumentRowComponent } from '../../custom/document-row/document-row.component';
import { UploadModalComponent } from '../../custom/upload-modal/upload-modal.component';
import { FormatBirthDatePipe } from '../../format-birth-date.pipe';
import { Student, AcademicRecord } from '../../models/student.model';
import { StudentDocument } from '../../models/document.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    ProfileHeroComponent,
    PillTabsComponent,
    SectionCardComponent,
    ProgressItemComponent,
    DocumentRowComponent,
    UploadModalComponent,
    FormatBirthDatePipe
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  activeTab = 'info';
  uploadModalOpen = false;

  tabs: Tab[] = [
    { key: 'info',      label: 'Personal info'   },
    { key: 'academic',  label: 'Academic record' },
    { key: 'documents', label: 'Documents'       },
  ];

  student: Student = {
    name: 'Anita',
    surname: 'Liberatore',
    area: 'Computer Engineering',
    studentId: 'S1234567',
    email: 'anita.liberatore@studenti.unito.it',
    pec: 'anita.liberatore@pec.unito.it',
    address: 'Via Roma 123, 10100 Turin (TO)',
    phone: '+39 320 123 4567',
    birthDate: '1998-04-22',
    birthPlace: 'Naples (NA)',
    taxCode: 'LBRANT98D62F839X',
    status: 'ACTIVE',
    year: 3,
    semester: 1,
    enrolledSince: 'Sep 1, 2021',
    graduationDate: 'Jun 2025',
    advisor: 'Prof. Laura Bianchi',
  };

  academic: AcademicRecord = {
    program: 'Computer Engineering',
    degree: 'Bachelor of Science (L-8)',
    faculty: 'Faculty of Science & Technology',
    credits:  { current: 53, total: 180 },
    courses:  { current: 6,  total: 22  },
    electives:{ current: 0,  total: 4   },
    gpa: 29.8,
  };

  documents: StudentDocument[] = [
    { name: 'Enrollment Certificate',       type: 'PDF', size: '245 KB', date: 'Oct 15, 2023', status: 'Verified' },
    { name: 'Study Plan 2023/24',           type: 'PDF', size: '128 KB', date: 'Sep 5, 2023',  status: 'Verified' },
    { name: 'Identity Document',            type: 'JPG', size: '1.2 MB', date: 'Aug 20, 2023', status: 'Pending'  },
    { name: 'English Certificate B2',       type: 'PDF', size: '340 KB', date: 'Jun 12, 2023', status: 'Verified' },
    { name: 'Tuition Receipt A.Y. 2023/24', type: 'PDF', size: '89 KB',  date: 'Sep 30, 2023', status: 'Verified' },
  ];

  /** Prepend newly uploaded documents at the top of the list */
  onDocumentsUploaded(incoming: StudentDocument[]): void {
    this.documents = [...incoming, ...this.documents];
  }
}
