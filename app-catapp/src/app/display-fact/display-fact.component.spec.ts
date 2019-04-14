import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFactComponent } from './display-fact.component';

describe('DisplayFactComponent', () => {
  let component: DisplayFactComponent;
  let fixture: ComponentFixture<DisplayFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
