import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseURL = 'http://cat-fact.herokuapp.com';


  constructor(private http: HttpClient) { }

  getFacts(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'true',
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    return this.http.get<any[]>(
      this.baseURL + '/facts' + '/random?animal_type=cat&amount=2', httpOptions
    ).pipe(catchError(this.errorHandler));
  }

  getImages(): Observable<any> {
    const url = 'https://aws.random.cat/meow';

    return this.http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
