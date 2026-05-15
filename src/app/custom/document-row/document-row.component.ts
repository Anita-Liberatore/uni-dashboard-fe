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
}
