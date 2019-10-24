import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresNotificationComponent } from './pres-notification.component';

describe('PresNotificationComponent', () => {
  let component: PresNotificationComponent;
  let fixture: ComponentFixture<PresNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
