import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteFormatoComponent } from './crete-formato.component';

describe('CreteFormatoComponent', () => {
  let component: CreteFormatoComponent;
  let fixture: ComponentFixture<CreteFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteFormatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
