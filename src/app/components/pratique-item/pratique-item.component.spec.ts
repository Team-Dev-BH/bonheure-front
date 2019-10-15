import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiqueItemComponent } from './pratique-item.component';

describe('PratiqueItemComponent', () => {
  let component: PratiqueItemComponent;
  let fixture: ComponentFixture<PratiqueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratiqueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratiqueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
