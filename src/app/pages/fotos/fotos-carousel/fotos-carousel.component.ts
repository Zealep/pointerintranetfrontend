import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatoArchivoService } from '../../../services/dato-archivo.service';
import { PROCESO_GALERIA } from '../../../shared/var.constant';
import { DatoArchivo } from '../../../models/dato-archivo';
import { Observable, of } from 'rxjs';
import { Imagen } from '../../../models/dto/images';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fotos-carousel',
  templateUrl: './fotos-carousel.component.html',
  styleUrls: ['./fotos-carousel.component.css']
})
export class FotosCarouselComponent implements OnInit {

  title: string = '';
  codigoRelacional: string = '';
  archivos: DatoArchivo[] = [];
  imgs: any [] = [];


  constructor(public dialogRef: MatDialogRef<FotosCarouselComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datoArchivoService:DatoArchivoService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.title = this.data.anexo.title;
    this.codigoRelacional = this.data.anexo.id;
    this.getAllAnexos();
  }

  getAllAnexos(){
    this.datoArchivoService.getArchivosAnexos(this.codigoRelacional,PROCESO_GALERIA)
    .subscribe( x=> {
        this.archivos = x ;
        console.log('archivos',this.archivos)
        for(let a of this.archivos){
          this.datoArchivoService.download(a.pathArchivo!).subscribe(image=>{
            let reader = new FileReader();
            reader.addEventListener("load", () => {
               this.imgs.push(this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string));

              }, false);
          if (image) {
               reader.readAsDataURL(image);
            }
          })
        }
    })
  }

}
