import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteFichaComponent } from './crete-ficha.component';

describe('CreteFichaComponent', () => {
  let component: CreteFichaComponent;
  let fixture: ComponentFixture<CreteFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
