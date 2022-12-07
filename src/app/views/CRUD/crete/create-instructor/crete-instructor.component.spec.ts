import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteInstructorComponent } from './crete-instructor.component';

describe('CreateInstructorComponent', () => {
  let component: CreteInstructorComponent;
  let fixture: ComponentFixture<CreteInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
