import { Directive, forwardRef, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { TestsDefinitionsService } from '../services/testDefinitions.service';

export class UniqueNameValidator {
    static createValidator(_testDefinitionsService: TestsDefinitionsService): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
          
        return _testDefinitionsService.getTestDefinitionByName(control.value)
        .pipe(
            map((result: any) => {
                return result === null ? null : {notUnique: true}
            }),
            debounceTime(10000)
        )
      };
    }
}
