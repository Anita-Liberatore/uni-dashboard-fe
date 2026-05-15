import {
  Component, Input, Output, EventEmitter,
  OnChanges, SimpleChanges, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentDocument } from '../../models/document.model';

interface PendingFile {
  file: File;
  /** Upload progress 0–100 */
  progress: number;
  status: 'idle' | 'uploading' | 'done' | 'error';
}

const DOC_TYPES = [
  'Enrollment Certificate',
  'Study Plan',
  'Identity Document',
  'Language Certificate',
  'Tuition Receipt',
  'Other',
];

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-modal.component.html',
  styleUrl: './upload-modal.component.css'
})
export class UploadModalComponent implements OnChanges {

  @Input()  isOpen = false;
  @Output() closed    = new EventEmitter<void>();
  @Output() uploaded  = new EventEmitter<StudentDocument[]>();

  /** Controls the CSS enter-animation trigger */
  visible = false;

  isDragging  = false;
  selectedType = '';
  pending: PendingFile[] = [];
  uploading = false;

  readonly docTypes = DOC_TYPES;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        // Small tick so the transition fires after the element is inserted
        setTimeout(() => (this.visible = true), 10);
      } else {
        this.visible = false;
        this.reset();
      }
    }
  }

  // ── Drag & drop handlers ─────────────────────────────────────────────────

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(): void {
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const files = Array.from(event.dataTransfer?.files ?? []);
    this.addFiles(files);
  }

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    this.addFiles(files);
    input.value = '';          // allow re-selecting the same file
  }

  private addFiles(files: File[]): void {
    const incoming = files.map<PendingFile>(f => ({
      file: f,
      progress: 0,
      status: 'idle'
    }));
    this.pending = [...this.pending, ...incoming];
  }

  removeFile(index: number): void {
    this.pending = this.pending.filter((_, i) => i !== index);
  }

  // ── Upload simulation ────────────────────────────────────────────────────

  upload(): void {
    if (!this.pending.length || this.uploading) return;
    this.uploading = true;

    this.pending.forEach(p => (p.status = 'uploading'));

    // Simulate staggered per-file progress
    const interval = setInterval(() => {
      let allDone = true;

      this.pending.forEach(p => {
        if (p.status !== 'done') {
          const step = Math.random() * 18 + 4;          // 4–22 % per tick
          p.progress = Math.min(100, p.progress + step);
          if (p.progress >= 100) {
            p.progress = 100;
            p.status   = 'done';
          } else {
            allDone = false;
          }
        }
      });

      if (allDone) {
        clearInterval(interval);
        setTimeout(() => this.finalize(), 600);         // brief pause on success
      }
    }, 120);
  }

  private finalize(): void {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    const docs: StudentDocument[] = this.pending.map(p => ({
      name:   this.selectedType || p.file.name.replace(/\.[^.]+$/, ''),
      type:   p.file.name.split('.').pop()?.toUpperCase() ?? 'FILE',
      size:   this.formatSize(p.file.size),
      date:   today,
      status: 'Pending'
    }));

    this.uploaded.emit(docs);
    this.uploading = false;
    this.close();
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  get allDone(): boolean {
    return this.pending.length > 0 && this.pending.every(p => p.status === 'done');
  }

  get canUpload(): boolean {
    return this.pending.length > 0 && !!this.selectedType && !this.uploading;
  }

  fileExt(f: File): string {
    return f.name.split('.').pop()?.toUpperCase() ?? 'FILE';
  }

  private formatSize(bytes: number): string {
    if (bytes < 1024)        return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private reset(): void {
    this.pending      = [];
    this.selectedType = '';
    this.uploading    = false;
    this.isDragging   = false;
  }

  close(): void {
    this.closed.emit();
  }

  /** Close on Escape key */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) this.close();
  }
}
