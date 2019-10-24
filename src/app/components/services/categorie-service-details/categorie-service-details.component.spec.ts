import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieServiceDetailsComponent } from './categorie-service-details.component';

describe('CategorieServiceDetailsComponent', () => {
  let component: CategorieServiceDetailsComponent;
  let fixture: ComponentFixture<CategorieServiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieServiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieServiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
