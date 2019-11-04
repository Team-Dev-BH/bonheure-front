import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresConciergerieComponent } from './choix-pres-conciergerie.component';

describe('ChoixPresConciergerieComponent', () => {
  let component: ChoixPresConciergerieComponent;
  let fixture: ComponentFixture<ChoixPresConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
