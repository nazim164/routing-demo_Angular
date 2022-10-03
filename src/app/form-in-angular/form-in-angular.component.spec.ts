import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInAngularComponent } from './form-in-angular.component';

describe('FormInAngularComponent', () => {
  let component: FormInAngularComponent;
  let fixture: ComponentFixture<FormInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
