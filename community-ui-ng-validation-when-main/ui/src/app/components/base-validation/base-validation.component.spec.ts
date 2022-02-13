import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseValidationComponent } from './base-validation.component';

describe('BaseValidationComponent', () => {
  let component: BaseValidationComponent;
  let fixture: ComponentFixture<BaseValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
