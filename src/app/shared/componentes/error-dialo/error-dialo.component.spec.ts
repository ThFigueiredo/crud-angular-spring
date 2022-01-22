import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialoComponent } from './error-dialo.component';

describe('ErrorDialoComponent', () => {
  let component: ErrorDialoComponent;
  let fixture: ComponentFixture<ErrorDialoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
