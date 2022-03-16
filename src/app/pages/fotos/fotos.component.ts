import { Component, OnInit, SecurityContext, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Portada } from '../../models/portada';
import { FotosCarouselComponent } from './fotos-carousel/fotos-carousel.component';
import { GaleriaService } from '../../services/galeria.service';
import { GaleriaFotosDTO } from '../../models/dto/galeria-fotos';
import { concatMap, mergeMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})

export class FotosComponent implements OnInit {
  panelOpenState = false;

  galerias: GaleriaFotosDTO[] = [];

  constructor(public dialog: MatDialog, private galeriaService: GaleriaService, private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
    this.getPrincipales();
  }

  getPrincipales() {
    this.galeriaService.getFotosPrincipal().subscribe(x => {
      this.galerias = x;
      console.log('galerias', this.galerias)
      for (let i = 0; i < this.galerias.length; i++) {
        for (let j = 0; j < this.galerias[i].principales.length; j++) {
          this.galerias[i].principales[j].img = this.transform(this.galerias[i].principales[j].img)!;
        }
      }
    })

  }
  transform(img: string) {
    return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + img));
    //return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  openCarousel(title: string, codigo: string) {
    const dialogRef = this.dialog.open(FotosCarouselComponent, {
      width: '800px',
      data: {
        anexo: {
          title: title,
          id: codigo
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }




}
