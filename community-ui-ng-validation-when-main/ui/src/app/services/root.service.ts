import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' ;
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {


  constructor(
    private http : HttpClient) { }

  get<T>(apiRoute: string, id: string, options: object = {}) {

    // build our url
    let route = this.getBaseURL() + "/" + apiRoute + id;
    
    // make the call
    return this.http.get<T>(route, options)
    .pipe(
      map(response => { return response; }),
      catchError(this.handleError(route, null))
    );
  }

  post<T>(apiRoute: string, model: any, options: object = {}) {
    
    // build our url
    let route = this.getBaseURL() + '/' + apiRoute;

    // make the call
    return this.http.post<T>(route,model,options)
    .pipe(
      map(response => {
        return response
      }),
      catchError(this.handleError(route, model))
    )
  }

  put<T>(apiRoute: string, model: any, options: object = {}) {

    // build our url
    let route = this.getBaseURL() + '/' + apiRoute;

    // make the call
    return this.http.put<T>(route,model,options)
    .pipe(
      map(response => {return response}),
      catchError(this.handleError(route, model))
    )
  }

  delete<T>(apiRoute: string, id: number, options: object = {}) {

    // build our url
    let route = this.getBaseURL() + '/' + apiRoute + "/" + id.toString;

    // since delete is only used for static resources, if theres no id, we do not use it!
    if (id === null || typeof(id) === 'undefined') {
      return this.handleError(route, null)
    }

    // make the call
    return this.http.delete<T>(route, options)
    .pipe(
      map(response => {return response}),
      catchError(this.handleError(route, null))
    )
  }

  getBaseURL() {
    return "http://localhost:5000";
  }

  handleError(url: string, data: any) {
    return(error: any) => {

      // build a response
      let errorResponse = { message : "", statusCode:0}
      errorResponse.message = `Error acessing ${url} with model ${data}.`;
      if (error instanceof HttpErrorResponse) {
        errorResponse.statusCode = (error as HttpErrorResponse).status
        errorResponse.message = errorResponse.message + ` Status code ${errorResponse.statusCode} returned.`
      }
      if (typeof(error.error) !== 'undefined' && error.error !== null ) {
        errorResponse.message = error.error.errorMessage
      }

      // single point of error messaging to the console.
      console.log(errorResponse.message)
      return throwError(errorResponse);
    }
  }
}
