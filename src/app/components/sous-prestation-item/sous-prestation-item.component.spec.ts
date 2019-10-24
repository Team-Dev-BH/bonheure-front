import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousPrestationItemComponent } from './sous-prestation-item.component';

describe('SousPrestationItemComponent', () => {
  let component: SousPrestationItemComponent;
  let fixture: ComponentFixture<SousPrestationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousPrestationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousPrestationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
