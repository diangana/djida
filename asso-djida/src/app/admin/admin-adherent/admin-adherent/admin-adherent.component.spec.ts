import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdherentComponent } from './admin-adherent.component';

describe('AdminAdherentComponent', () => {
  let component: AdminAdherentComponent;
  let fixture: ComponentFixture<AdminAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
