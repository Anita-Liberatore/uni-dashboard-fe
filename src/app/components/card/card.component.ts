import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

 
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';

  get computedLayout(): string {
    return this.layout === 'vertical'
      ? 'flex flex-col text-center space-y-6'
      : 'flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse text-center sm:text-left';
  }
  

}
