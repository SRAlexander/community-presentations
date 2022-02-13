import { Injectable } from '@angular/core';
import { catchError, debounce, debounceTime, delay, map } from 'rxjs/operators';
import { TestModel } from '../model/testModel';
import { RootService } from './root.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TestsDefinitionsService extends RootService {

  apiEndpoint = "tests";

  public addTestDefinition(testDefinition: TestModel) {
    return super.put(this.apiEndpoint, testDefinition)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  getTestDefinitionByName(testDefinitionName: string): any {
    return super.get(this.apiEndpoint + "/name/", testDefinitionName).pipe(
      map((response) => {
        return response
      })
    )
  }

}
