import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormatoComponent } from './update-formato.component';

describe('UpdateFormatoComponent', () => {
  let component: UpdateFormatoComponent;
  let fixture: ComponentFixture<UpdateFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
