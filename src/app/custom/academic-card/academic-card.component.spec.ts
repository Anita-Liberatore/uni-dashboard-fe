import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicCardComponent } from './academic-card.component';

describe('AcademicCardComponent', () => {
  let component: AcademicCardComponent;
  let fixture: ComponentFixture<AcademicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
