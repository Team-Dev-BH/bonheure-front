import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreSecuriteComponent } from './parametre-securite.component';

describe('ParametreSecuriteComponent', () => {
  let component: ParametreSecuriteComponent;
  let fixture: ComponentFixture<ParametreSecuriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreSecuriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
