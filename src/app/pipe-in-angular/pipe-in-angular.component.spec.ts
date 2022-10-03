import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeInAngularComponent } from './pipe-in-angular.component';

describe('PipeInAngularComponent', () => {
  let component: PipeInAngularComponent;
  let fixture: ComponentFixture<PipeInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
