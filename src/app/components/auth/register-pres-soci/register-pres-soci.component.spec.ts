import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPresSociComponent } from './register-pres-soci.component';

describe('RegisterPresSociComponent', () => {
  let component: RegisterPresSociComponent;
  let fixture: ComponentFixture<RegisterPresSociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPresSociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPresSociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
