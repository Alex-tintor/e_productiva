import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendicesComponent } from './aprendices.component';

describe('AprendicesComponent', () => {
  let component: AprendicesComponent;
  let fixture: ComponentFixture<AprendicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
