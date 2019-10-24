import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapConciergerieComponent } from './recap-conciergerie.component';

describe('RecapConciergerieComponent', () => {
  let component: RecapConciergerieComponent;
  let fixture: ComponentFixture<RecapConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
