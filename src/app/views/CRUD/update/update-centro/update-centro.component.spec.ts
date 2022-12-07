import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentroComponent } from './update-centro.component';

describe('UpdateCentroComponent', () => {
  let component: UpdateCentroComponent;
  let fixture: ComponentFixture<UpdateCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
