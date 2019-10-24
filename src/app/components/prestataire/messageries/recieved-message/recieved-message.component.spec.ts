import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedMessageComponent } from './recieved-message.component';

describe('RecievedMessageComponent', () => {
  let component: RecievedMessageComponent;
  let fixture: ComponentFixture<RecievedMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
