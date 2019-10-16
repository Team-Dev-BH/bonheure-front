import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNgbComponent } from './carousel-ngb.component';

describe('CarouselNgbComponent', () => {
  let component: CarouselNgbComponent;
  let fixture: ComponentFixture<CarouselNgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
