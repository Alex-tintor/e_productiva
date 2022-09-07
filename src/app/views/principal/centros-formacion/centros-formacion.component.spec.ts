import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosFormacionComponent } from './centros-formacion.component';

describe('CentrosFormacionComponent', () => {
  let component: CentrosFormacionComponent;
  let fixture: ComponentFixture<CentrosFormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosFormacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
