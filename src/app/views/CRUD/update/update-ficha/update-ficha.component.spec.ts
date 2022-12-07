import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFichaComponent } from './update-ficha.component';

describe('UpdateFichaComponent', () => {
  let component: UpdateFichaComponent;
  let fixture: ComponentFixture<UpdateFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
