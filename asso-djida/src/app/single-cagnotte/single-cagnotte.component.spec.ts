import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCagnotteComponent } from './single-cagnotte.component';

describe('SingleCagnotteComponent', () => {
  let component: SingleCagnotteComponent;
  let fixture: ComponentFixture<SingleCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
