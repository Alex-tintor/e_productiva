import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteProgramaComponent } from './crete-programa.component';

describe('CreteProgramaComponent', () => {
  let component: CreteProgramaComponent;
  let fixture: ComponentFixture<CreteProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
