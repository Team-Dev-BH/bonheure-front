import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireConciergerieComponent } from './commentaire-conciergerie.component';

describe('CommentaireConciergerieComponent', () => {
  let component: CommentaireConciergerieComponent;
  let fixture: ComponentFixture<CommentaireConciergerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireConciergerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireConciergerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
