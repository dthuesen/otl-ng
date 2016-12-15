/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShortListComponent } from './short-list.component';

describe('ShortListComponent', () => {
  let component: ShortListComponent;
  let fixture: ComponentFixture<ShortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
