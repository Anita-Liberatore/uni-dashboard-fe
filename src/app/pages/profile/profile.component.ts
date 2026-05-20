import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ProfileHeroComponent } from '../../custom/profile-hero/profile-hero.component';
import { PillTabsComponent, Tab } from '../../components/pill-tabs/pill-tabs.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { ProgressItemComponent } from '../../components/progress-item/progress-item.component';
import { DocumentRowComponent } from '../../custom/document-row/document-row.component';
import { UploadModalComponent } from '../../custom/upload-modal/upload-modal.component';
import { FormatBirthDatePipe } from '../../format-birth-date.pipe';
import { StudentService, EMPTY_STUDENT, EMPTY_ACADEMIC } from '../../services/student.service';
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
    FormatBirthDatePipe,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private readonly svc = inject(StudentService);

  readonly student  = toSignal(this.svc.getProfile(),        { initialValue: EMPTY_STUDENT });
  readonly academic = toSignal(this.svc.getAcademicRecord(), { initialValue: EMPTY_ACADEMIC });

  // Documents are writable so the upload modal can prepend new entries.
  private readonly _documents = signal<StudentDocument[]>([]);

  constructor() {
    this.svc.getDocuments().subscribe(d => this._documents.set(d));
  }

  readonly documents = this._documents.asReadonly();

  /** Prepend newly uploaded documents at the top of the list */
  onDocumentsUploaded(incoming: StudentDocument[]): void {
    this._documents.update(current => [...incoming, ...current]);
  }

  // ── Tab state ─────────────────────────────────────────────────────────────

  activeTab = 'info';
  uploadModalOpen = false;

  tabs: Tab[] = [
    { key: 'info',      label: 'Dati personali' },
    { key: 'academic',  label: 'Carriera'        },
    { key: 'documents', label: 'Documenti'       },
  ];
}
