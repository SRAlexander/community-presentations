import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedRightComponent } from './extended-right.component';

describe('ExtendedRightComponent', () => {
  let component: ExtendedRightComponent;
  let fixture: ComponentFixture<ExtendedRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
