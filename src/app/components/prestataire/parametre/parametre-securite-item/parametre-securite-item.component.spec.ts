import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreSecuriteItemComponent } from './parametre-securite-item.component';

describe('ParametreSecuriteItemComponent', () => {
  let component: ParametreSecuriteItemComponent;
  let fixture: ComponentFixture<ParametreSecuriteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreSecuriteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreSecuriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
