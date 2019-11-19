import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutosComponent } from './add-autos.component';

describe('AddAutosComponent', () => {
  let component: AddAutosComponent;
  let fixture: ComponentFixture<AddAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
