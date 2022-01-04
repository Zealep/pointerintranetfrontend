import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../models/perfil';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  perfil!: Perfil;

  constructor(private perfilService: PerfilService) { }

  ngOnInit(): void {
    this.getDatosPerfil();
  }

  getDatosPerfil(){
    const usuario =  sessionStorage.getItem('usuario')!;
    this.perfilService.getDatosPerfil(usuario).subscribe(x=>{
      this.perfil = x;
    })
  }
}
