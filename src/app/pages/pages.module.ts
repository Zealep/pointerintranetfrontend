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




@NgModule({
  declarations: [
    MiPerfilComponent,
    AsistenciaComponent,
    BoletaPagoComponent
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
    PdfViewerModule
  ]
})
export class PagesModule { }
