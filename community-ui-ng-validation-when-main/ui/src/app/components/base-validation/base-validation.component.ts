import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TestModel } from 'src/app/model/testModel';
import { TestsDefinitionsService } from 'src/app/services/testDefinitions.service';

@Component({
  selector: 'app-base-validation',
  templateUrl: './base-validation.component.html',
  styleUrls: ['./base-validation.component.scss']
})
export class BaseValidationComponent implements OnInit {

  title = 'ui';
  demoForm: FormGroup = new FormGroup({})

  constructor(
    private toastr: ToastrService,
    private _testDefinitionsService: TestsDefinitionsService
  ){}

  ngOnInit(){
    this.createForm();
    
  }

  createForm() {
    this.demoForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  getControls(){
    return this.demoForm?.controls;
  }

  submit() {
    
    let testModel = new TestModel()
    testModel.name = this.demoForm.controls['name'].value;
    testModel.description = this.demoForm.controls['description'].value;

    if (this.demoForm.valid) {
      
      this._testDefinitionsService.addTestDefinition(testModel).subscribe(
        {
          next: (res: any) => {
            this.toastr.success("Test Definition has been added successfully");
          },
          error: (error: any) => {
            this.toastr.error(error.message, "Test Definition saving has failed");
          }
        });
      
    } else {
      this.toastr.error("There are errors remaining on the form")
      this.demoForm.markAllAsTouched()
    }
  }
}
