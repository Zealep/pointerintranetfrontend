import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BoletaPagoComponent } from './boleta-pago/boleta-pago.component';
import { VacacionComponent } from './vacacion/vacacion.component';
import { VerGozadasComponent } from './vacacion/ver-gozadas/ver-gozadas.component';
import { FotosComponent } from './fotos/fotos.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FotosCarouselComponent } from './fotos/fotos-carousel/fotos-carousel.component';




@NgModule({
  declarations: [
    MiPerfilComponent,
    AsistenciaComponent,
    BoletaPagoComponent,
    VacacionComponent,
    VerGozadasComponent,
    FotosComponent,
    NoticiaComponent,
    FotosCarouselComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PdfViewerModule,
    IvyCarouselModule
  ]
})
export class PagesModule { }
