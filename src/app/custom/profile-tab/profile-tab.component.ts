import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../components/tab/tab.component';

@Component({
  selector: 'app-profile-tab',
  standalone: true,
  imports: [TabComponent, CommonModule],
  templateUrl: './profile-tab.component.html',
})
export class ProfileTabComponent {
  @Input() activeTab: string = '';
  @Output() tabChanged = new EventEmitter<string>();

  tabs = [
    { key: 'academic', label: 'Academic' },
    { key: 'documents', label: 'Documents' },
    { key: 'timeline', label: 'Timeline' }
  ];

  activeClass =
    'text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500';

  inactiveClass =
    'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-400 dark:text-gray-500';

  onTabChanged(tab: string) {
    this.tabChanged.emit(tab);
  }
}
