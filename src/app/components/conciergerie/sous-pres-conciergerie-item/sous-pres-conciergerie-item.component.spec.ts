import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousPresConciergerieItemComponent } from './sous-pres-conciergerie-item.component';

describe('SousPresConciergerieItemComponent', () => {
  let component: SousPresConciergerieItemComponent;
  let fixture: ComponentFixture<SousPresConciergerieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousPresConciergerieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousPresConciergerieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
