import { VacacionGanada } from '../models/vacacion-ganada';

import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { VacacionGozada } from '../models/vacacion-gozada';
import { DatoArchivo } from '../models/dato-archivo';

@Injectable({
  providedIn: 'root'
})
export class DatoArchivoService {

  private url: string = `${HOST}/archivo`;

  constructor(private http: HttpClient, private router: Router) {
  }

  getArchivosAnexos(id:String,proceso:string) {
    return this.http.get<DatoArchivo[]>(`${this.url}/getAllAnexos/${id}/${proceso}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  download(path: string): Observable<Blob> {
    let parms = new HttpParams();
    parms = parms.append('url',path);
    return this.http.get(`${this.url}/getFile`,
      {
        params:parms,
        responseType: 'blob'
    });
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
