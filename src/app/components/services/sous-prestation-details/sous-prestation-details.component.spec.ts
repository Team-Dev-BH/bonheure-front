import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousPrestationDetailsComponent } from './sous-prestation-details.component';

describe('SousPrestationDetailsComponent', () => {
  let component: SousPrestationDetailsComponent;
  let fixture: ComponentFixture<SousPrestationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousPrestationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousPrestationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
