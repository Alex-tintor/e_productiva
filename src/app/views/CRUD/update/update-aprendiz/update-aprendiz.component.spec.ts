import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAprendizComponent } from './update-aprendiz.component';

describe('UpdateAprendizComponent', () => {
  let component: UpdateAprendizComponent;
  let fixture: ComponentFixture<UpdateAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAprendizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
