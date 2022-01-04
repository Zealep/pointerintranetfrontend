
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { BoletaPagoComponent } from './boleta-pago/boleta-pago.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [ //
      {
        path: '', //
        pathMatch: 'full',
        redirectTo: 'miperfil'
      },

      {
        path: 'miperfil',
        component: MiPerfilComponent
      },
      {
        path: 'asistencia',
        component: AsistenciaComponent
      },
      {
        path: 'boleta',
        component: BoletaPagoComponent
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
