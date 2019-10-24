import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDelaiComponent } from './commande-delai.component';

describe('CommandeDelaiComponent', () => {
  let component: CommandeDelaiComponent;
  let fixture: ComponentFixture<CommandeDelaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeDelaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeDelaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
