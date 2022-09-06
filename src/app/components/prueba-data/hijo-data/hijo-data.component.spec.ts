import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDataComponent } from './hijo-data.component';

describe('HijoDataComponent', () => {
  let component: HijoDataComponent;
  let fixture: ComponentFixture<HijoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
