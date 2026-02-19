import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-documents-card',
  imports: [
    CardComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './documents-card.component.html',
  standalone: true,
  styleUrl: './documents-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentsCardComponent {

  @Input() documentsData: any;

}
