import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReporteService } from '../../services/reporte.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RptBoleta } from '../../models/dto/rpt-boleta';
import * as moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-boleta-pago',
  templateUrl: './boleta-pago.component.html',
  styleUrls: ['./boleta-pago.component.css']
})
export class BoletaPagoComponent implements OnInit {

   date = new FormControl(moment());

  chosenYearHandler(normalizedYear: moment.Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }


  constructor(private reporteService:ReporteService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  export(){

    let params = new RptBoleta();
    let periodo = this.date.value;

    params.varEmpresa = '01'
    params.varTrabajador = sessionStorage.getItem("usuario")!;
    params.varPeriodo = moment(periodo).format('YYYY-MM');
    params.varPeriodo = params.varPeriodo.replace('-','');

    console.log('periodo',periodo)
    console.log('moment',params)

    this.reporteService.viewReporteBoleta(params).subscribe(result =>{

      var file = new Blob([result], { type: "application/pdf" });
      const url = URL.createObjectURL(file);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();

    });
  }







}
