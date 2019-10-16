import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotageItemComponent } from './pilotage-item.component';

describe('PilotageItemComponent', () => {
  let component: PilotageItemComponent;
  let fixture: ComponentFixture<PilotageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
