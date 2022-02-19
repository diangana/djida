import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdherentComponent } from './modif-adherent.component';

describe('ModifAdherentComponent', () => {
  let component: ModifAdherentComponent;
  let fixture: ComponentFixture<ModifAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
