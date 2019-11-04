import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPresConciergerieComponent } from './confirmation-pres-conciergerie.component';

describe('ConfirmationPresConciergerieComponent', () => {
  let component: ConfirmationPresConciergerieComponent;
  let fixture: ComponentFixture<ConfirmationPresConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationPresConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPresConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
