
import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Menu } from '../models/menu';
import { Perfil } from '../models/perfil';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url: string = `${HOST}/perfil`;

  constructor(private http: HttpClient, private router: Router) {
  }

  getDatosPerfil(id: string) {
    return this.http.get<Perfil>(`${this.url}/find/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  obtenerFoto(idUsuario: string):Observable<Blob>{
    return this.http.get(`${this.url}/obtenerFoto/${idUsuario}`,
       {responseType: 'blob'
      });
  }

  uploadFoto(formData: FormData){
        return this.http.post<Respuesta>(`${this.url}/subirFoto`, formData)
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
