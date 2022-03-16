
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { BoletaPagoComponent } from './boleta-pago/boleta-pago.component';
import { VacacionComponent } from './vacacion/vacacion.component';
import { FotosComponent } from './fotos/fotos.component';
import { NoticiaComponent } from './noticia/noticia.component';


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
      },
      {
        path: 'vacaciones',
        component: VacacionComponent
      },
      {
        path: 'fotos',
        component: FotosComponent
      },
      {
        path: 'noticias',
        component: NoticiaComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
