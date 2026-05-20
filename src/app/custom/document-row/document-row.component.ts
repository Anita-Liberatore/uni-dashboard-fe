import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDocument } from '../../models/document.model';

@Component({
  selector: 'app-document-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-row.component.html'
})
export class DocumentRowComponent {
  @Input() doc!: StudentDocument;

  /** Translate document status to Italian for display */
  statusLabel(status: StudentDocument['status']): string {
    return status === 'Verified' ? 'Verificato' : 'In attesa';
  }
}
