import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCagnotteComponent } from './modif-cagnotte.component';

describe('ModifCagnotteComponent', () => {
  let component: ModifCagnotteComponent;
  let fixture: ComponentFixture<ModifCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
