import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatBirthDatePipe } from '../../format-birth-date.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormatBirthDatePipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  activeTab = 'info';

  tabs = [
    { key: 'info',      label: 'Dati personali' },
    { key: 'academic',  label: 'Carriera' },
    { key: 'documents', label: 'Documenti' },
  ];

  student = {
    name: 'Anita',
    surname: 'Liberatore',
    universityArea: 'Ingegneria Informatica',
    studentId: 'S1234567',
    email: 'anita.liberatore@studenti.unito.it',
    pec: 'anita.liberatore@pec.unito.it',
    address: 'Via Roma 123, 10100 Torino (TO)',
    phone: '+39 320 123 4567',
    birthDate: '1998-04-22',
    birthPlace: 'Napoli (NA)',
    codiceFiscale: 'LBRANT98D62F839X',
    enrollmentStatus: 'ACTIVE',
    anno: 3,
    semestre: 1,
    enrolled: '1 Set 2021',
    graduationDate: 'Giu 2025',
    advisor: 'Prof.ssa Laura Bianchi',
  };

  academic = {
    program: 'Ingegneria Informatica',
    degree: 'Laurea Triennale (L-8)',
    faculty: 'Facoltà di Scienze e Tecnologia',
    department: 'Dipartimento di Informatica',
    credits: { current: 53, total: 180 },
    courses: { current: 6, total: 22 },
    electives: { current: 0, total: 4 },
    media: 29.8,
  };

  documents = [
    { name: 'Certificato di Iscrizione',   type: 'PDF', size: '245 KB', date: '15 Ott 2023', status: 'Verified' },
    { name: 'Piano di Studi 2023/24',       type: 'PDF', size: '128 KB', date: '5 Set 2023',  status: 'Verified' },
    { name: "Documento d'Identità",         type: 'JPG', size: '1.2 MB', date: '20 Ago 2023', status: 'Pending'  },
    { name: 'Attestato Lingua Inglese B2',  type: 'PDF', size: '340 KB', date: '12 Giu 2023', status: 'Verified' },
    { name: 'Ricevuta Tasse A.A. 2023/24',  type: 'PDF', size: '89 KB',  date: '30 Set 2023', status: 'Verified' },
  ];

  progressWidth(current: number, total: number): string {
    return `${Math.round((current / total) * 100)}%`;
  }
}
