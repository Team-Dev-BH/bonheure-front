import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccueilParametreComponent } from "./accueil-parametre.component";

describe("AccueilParametreComponent", () => {
  let component: AccueilParametreComponent;
  let fixture: ComponentFixture<AccueilParametreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilParametreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
