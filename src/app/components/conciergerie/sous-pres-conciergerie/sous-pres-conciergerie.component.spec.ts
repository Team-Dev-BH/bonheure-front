import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousPresConciergerieComponent } from './sous-pres-conciergerie.component';

describe('SousPresConciergerieComponent', () => {
  let component: SousPresConciergerieComponent;
  let fixture: ComponentFixture<SousPresConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousPresConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousPresConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
