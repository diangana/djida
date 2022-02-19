import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAdherentComponent } from './admin-add-adherent.component';

describe('AdminAddAdherentComponent', () => {
  let component: AdminAddAdherentComponent;
  let fixture: ComponentFixture<AdminAddAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
