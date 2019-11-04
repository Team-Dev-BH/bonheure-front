import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPresClientComponent } from './choix-pres-client.component';

describe('ChoixPresClientComponent', () => {
  let component: ChoixPresClientComponent;
  let fixture: ComponentFixture<ChoixPresClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPresClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPresClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
