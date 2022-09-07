import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDataComponent } from './prueba-data.component';

describe('PruebaDataComponent', () => {
  let component: PruebaDataComponent;
  let fixture: ComponentFixture<PruebaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
