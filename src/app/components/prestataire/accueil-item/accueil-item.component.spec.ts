import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilItemComponent } from './accueil-item.component';

describe('AccueilItemComponent', () => {
  let component: AccueilItemComponent;
  let fixture: ComponentFixture<AccueilItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
