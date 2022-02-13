import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLabelAndDataComponent } from './dynamic-label-and-data.component';

describe('DynamicLabelAndDataComponent', () => {
  let component: DynamicLabelAndDataComponent;
  let fixture: ComponentFixture<DynamicLabelAndDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLabelAndDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLabelAndDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
