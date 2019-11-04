import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresSelectComponent } from './choix-pres-select.component';

describe('ChoixPresSelectComponent', () => {
  let component: ChoixPresSelectComponent;
  let fixture: ComponentFixture<ChoixPresSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
