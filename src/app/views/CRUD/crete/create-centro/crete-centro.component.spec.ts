import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteCentroComponent } from './crete-centro.component';

describe('CreteCentroComponent', () => {
  let component: CreteCentroComponent;
  let fixture: ComponentFixture<CreteCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteCentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreteCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
