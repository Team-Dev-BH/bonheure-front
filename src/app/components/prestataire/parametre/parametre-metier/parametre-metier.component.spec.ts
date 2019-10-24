import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreMetierComponent } from './parametre-metier.component';

describe('ParametreMetierComponent', () => {
  let component: ParametreMetierComponent;
  let fixture: ComponentFixture<ParametreMetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreMetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
