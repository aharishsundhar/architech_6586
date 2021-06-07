import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatearchComponent } from './createarch.component';

describe('CreatearchComponent', () => {
  let component: CreatearchComponent;
  let fixture: ComponentFixture<CreatearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});