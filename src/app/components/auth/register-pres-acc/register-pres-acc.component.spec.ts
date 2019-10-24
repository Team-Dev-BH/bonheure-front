import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPresAccComponent } from './register-pres-acc.component';

describe('RegisterPresAccComponent', () => {
  let component: RegisterPresAccComponent;
  let fixture: ComponentFixture<RegisterPresAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPresAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPresAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
