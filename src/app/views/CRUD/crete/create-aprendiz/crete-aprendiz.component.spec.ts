import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteAprendizComponent } from './crete-aprendiz.component';

describe('CreteAprendizComponent', () => {
  let component: CreteAprendizComponent;
  let fixture: ComponentFixture<CreteAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteAprendizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
