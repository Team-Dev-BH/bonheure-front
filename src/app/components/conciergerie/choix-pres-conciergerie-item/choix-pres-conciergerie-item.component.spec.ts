import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresConciergerieItemComponent } from './choix-pres-conciergerie-item.component';

describe('ChoixPresConciergerieItemComponent', () => {
  let component: ChoixPresConciergerieItemComponent;
  let fixture: ComponentFixture<ChoixPresConciergerieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresConciergerieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresConciergerieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
