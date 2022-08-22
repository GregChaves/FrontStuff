import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadzipComponent } from './uploadzip.component';

describe('UploadzipComponent', () => {
  let component: UploadzipComponent;
  let fixture: ComponentFixture<UploadzipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadzipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadzipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
