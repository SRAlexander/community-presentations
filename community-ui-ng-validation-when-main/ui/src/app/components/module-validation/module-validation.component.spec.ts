import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleValidationComponent } from './module-validation.component';

describe('ModuleValidationComponent', () => {
  let component: ModuleValidationComponent;
  let fixture: ComponentFixture<ModuleValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
