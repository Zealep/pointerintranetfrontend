import { DatoArchivo } from '../models/dato-archivo';
import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { ResponseApi } from '../models/dto/response-api';
import { NoticiaDTO } from '../models/dto/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private baseUrl: string = `${HOST}/noticia`;

  constructor(private http: HttpClient, private router: Router) {
  }

  getNoticiaesPrincipales() {
    return this.http.get<NoticiaDTO[]>(`${this.baseUrl}/principales`)
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
    return throwError('Usuario o clave invalidas');

  }
}
