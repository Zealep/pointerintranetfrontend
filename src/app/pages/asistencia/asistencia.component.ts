import { Component, OnInit } from '@angular/core';
import { RptAsistencia } from '../../models/dto/rpt-asistencia';
import { FormGroup, FormControl } from '@angular/forms';
import { ReporteService } from '../../services/reporte.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {


  form: FormGroup = new FormGroup({
    fechaInicio: new FormControl(''),
    fechaFin: new FormControl('')
  });
  constructor(private reporteService:ReporteService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  export(){
    let params = new RptAsistencia();
    let inicio = this.form.get('fechaInicio')?.value;
    let fin = this.form.get('fechaFin')?.value;
    console.log('inicio',inicio);
    console.log('fin',fin);

    params.varEmpresa = '01'
    params.varIdTrabajador = sessionStorage.getItem("usuario")!;
    params.varFechaDesde = moment(inicio).format('YYYY-MM-DD');
    params.varFechaHasta = moment(fin).format('YYYY-MM-DD');;
console.log('params',params)

    this.reporteService.viewReporteAsistencia(params).subscribe(result =>{

      var file = new Blob([result], { type: "application/pdf" });

      const url = URL.createObjectURL(file);
      //this.urlSafe= this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(url));
        /*
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      a.href = url;
      a.download = 'contrato.pdf';
      a.click();
       */

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();


      /*
      let reader = new FileReader();
      reader.addEventListener("load", () => {
          this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
          console.log('pdf',this.pdfSrc)
      }, false);
    if (result) {
         reader.readAsDataURL(result);
      }
*/

     /*
    const url = window.URL.createObjectURL(result);
     const a = document.createElement('a');
     a.setAttribute('style', 'display:none;');
     document.body.appendChild(a);
     a.href = url;
     a.download = 'reporte-asistencia.pdf';
     a.click();
     return url;
      */
    });
  }
}
