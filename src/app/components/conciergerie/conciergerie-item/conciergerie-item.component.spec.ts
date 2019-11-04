import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciergerieItemComponent } from './conciergerie-item.component';

describe('ConciergerieItemComponent', () => {
  let component: ConciergerieItemComponent;
  let fixture: ComponentFixture<ConciergerieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciergerieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciergerieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
