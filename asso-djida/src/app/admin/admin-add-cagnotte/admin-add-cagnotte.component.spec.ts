import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCagnotteComponent } from './admin-add-cagnotte.component';

describe('AdminAddCagnotteComponent', () => {
  let component: AdminAddCagnotteComponent;
  let fixture: ComponentFixture<AdminAddCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
