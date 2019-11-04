import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresAttenteComponent } from './choix-pres-attente.component';

describe('ChoixPresAttenteComponent', () => {
  let component: ChoixPresAttenteComponent;
  let fixture: ComponentFixture<ChoixPresAttenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresAttenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
