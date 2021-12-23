import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    MiPerfilComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
