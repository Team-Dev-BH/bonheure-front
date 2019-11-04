import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresClientItemComponent } from './choix-pres-client-item.component';

describe('ChoixPresClientItemComponent', () => {
  let component: ChoixPresClientItemComponent;
  let fixture: ComponentFixture<ChoixPresClientItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresClientItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresClientItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
