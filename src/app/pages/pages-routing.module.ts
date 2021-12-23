
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';


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
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
