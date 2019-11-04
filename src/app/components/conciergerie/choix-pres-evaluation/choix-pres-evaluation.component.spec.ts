import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresEvaluationComponent } from './choix-pres-evaluation.component';

describe('ChoixPresEvaluationComponent', () => {
  let component: ChoixPresEvaluationComponent;
  let fixture: ComponentFixture<ChoixPresEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
