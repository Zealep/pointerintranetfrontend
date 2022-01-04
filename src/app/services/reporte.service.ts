
import { catchError } from 'rxjs/operators';
import { HOST } from '../shared/var.constant';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Menu } from '../models/menu';
import { Perfil } from '../models/perfil';
import { RptAsistencia } from '../models/dto/rpt-asistencia';
import { RptBoleta } from '../models/dto/rpt-boleta';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private url: string = `${HOST}/reporte`;

  constructor(private http: HttpClient, private router: Router) {
  }

  viewReporteAsistencia(params:RptAsistencia) {
    return this.http.post(`${this.url}/asistencia`,params,
    {responseType:'blob',
  });
  }
  viewReporteBoleta(params:RptBoleta) {
    return this.http.post(`${this.url}/boleta`,params,
    {responseType:'blob',
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
