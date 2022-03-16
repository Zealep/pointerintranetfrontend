import { VacacionGanada } from '../models/vacacion-ganada';

import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { VacacionGozada } from '../models/vacacion-gozada';
import { GaleriaPrincipal } from '../models/dto/galeria-principal';
import { GaleriaFotosDTO } from '../models/dto/galeria-fotos';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private url: string = `${HOST}/galeria`;

  constructor(private http: HttpClient, private router: Router) {
  }


  getYears() {
    return this.http.get<string[]>(`${this.url}/years`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getByYear(year:String) {
    return this.http.get<GaleriaPrincipal[]>(`${this.url}/find/year/${year}}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  getFotosPrincipal() {
    return this.http.get<GaleriaFotosDTO[]>(`${this.url}/principales`)
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
