import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPresComponent } from './register-pres.component';

describe('RegisterPresComponent', () => {
  let component: RegisterPresComponent;
  let fixture: ComponentFixture<RegisterPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
