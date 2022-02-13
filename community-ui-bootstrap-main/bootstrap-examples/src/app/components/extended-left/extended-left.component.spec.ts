import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedLeftComponent } from './extended-left.component';

describe('ExtendedLeftComponent', () => {
  let component: ExtendedLeftComponent;
  let fixture: ComponentFixture<ExtendedLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
