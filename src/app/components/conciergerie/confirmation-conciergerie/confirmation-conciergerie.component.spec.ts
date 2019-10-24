import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationConciergerieComponent } from './confirmation-conciergerie.component';

describe('ConfirmationConciergerieComponent', () => {
  let component: ConfirmationConciergerieComponent;
  let fixture: ComponentFixture<ConfirmationConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
