import { Component, OnInit, SecurityContext } from '@angular/core';
import { NoticiaDTO } from '../../models/dto/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticias: NoticiaDTO[] = [];

  constructor(private noticiaService: NoticiaService,  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPrincipales();
  }

  getPrincipales() {
    this.noticiaService.getNoticiaesPrincipales()
      .subscribe(x => {
        this.noticias = x;
      })

  }

  transform(img: string) {
    return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + img));
    //return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  convert(blob:Blob) {
    console.log('blob',blob)
    var reader = new FileReader();
    reader.onload = function () {
      console.log(reader.result);
    }
    return reader.readAsText(new Blob([blob], {type: "application/octet-stream"}));
  }


  convertMeses(mes:string){

    let m;
    switch(mes){
      case '01': m='ENERO';break;
      case '02': m='FEBRERO';break;
      case '03': m='MARZO';break;
      case '04': m='ABRIL';break;
      case '05': m='MAYO';break;
      case '06': m='JUNIO';break;
      case '07': m='JULIO';break;
      case '08': m='AGOSTO';break;
      case '09': m='SEPTIEMBRE';break;
      case '10': m='OCTUBRE';break;
      case '11': m='NOVIEMBRE';break;
      case '12': m='DICIEMBRE';break;
      default: m='';
    }
return m;
  }

}
