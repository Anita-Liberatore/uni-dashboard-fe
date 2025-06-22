import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() activeTab: string = '';
  @Input() tabs: { key: string; label: string }[] = [];
  @Input() activeClass: string = '';
  @Input() inactiveClass: string = '';

  @Output() tabChanged = new EventEmitter<string>();

  setActive(tab: string) {
    this.tabChanged.emit(tab);
  }
}
