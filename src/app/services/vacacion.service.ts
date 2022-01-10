import { VacacionGanada } from './../models/vacacion-ganada';

import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { VacacionGozada } from '../models/vacacion-gozada';

@Injectable({
  providedIn: 'root'
})
export class VacacionService {

  private url: string = `${HOST}/vacacion`;

  constructor(private http: HttpClient, private router: Router) {
  }

  getVacacionesGanadas(id: string) {
    return this.http.get<VacacionGanada[]>(`${this.url}/ganada/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getVacacionesGozadas(id: string,periodo:string) {
    return this.http.get<VacacionGozada[]>(`${this.url}/gozada/${id}/${periodo}`)
    .pipe(
      catchError(this.handleError)
    );
  }





  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('Client error', error.error.message);
    } else {
      // Error en el lado del servidor
      console.log('Error Status:', error.status);
      console.log('Error:', error.error);
    }
    //catch and rethrow
    return throwError(error.error.message);

  }
}
