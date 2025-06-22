import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academic-card',
  imports: [CommonModule, CardComponent],
  templateUrl: './academic-card.component.html',
  styleUrl: './academic-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcademicCardComponent {

  @Input() academicData: any;

}
