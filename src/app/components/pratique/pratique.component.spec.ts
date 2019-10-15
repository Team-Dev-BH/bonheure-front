import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiqueComponent } from './pratique.component';

describe('PratiqueComponent', () => {
  let component: PratiqueComponent;
  let fixture: ComponentFixture<PratiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
