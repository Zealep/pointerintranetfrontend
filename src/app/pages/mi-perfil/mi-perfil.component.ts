import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../models/perfil';
import { PerfilService } from '../../services/perfil.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DEFAULT_FOTO } from '../../shared/var.constant';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  photoBlobUrl: any
  perfil!: Perfil;
  usuario! : string;

  constructor(private perfilService: PerfilService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.usuario =  sessionStorage.getItem('usuario')!;
    this.getDatosPerfil();
    this.getPhoto();
  }

  getDatosPerfil(){

    this.perfilService.getDatosPerfil(this.usuario).subscribe(x=>{
      this.perfil = x;
    })
  }

  getPhoto(){
    this.perfilService.obtenerFoto(this.usuario)
    .subscribe(image =>{
        if(image.size>0){
          this.createImageFromBlob(image);
        }else{
          this.photoBlobUrl = DEFAULT_FOTO;
        }

    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
        this.photoBlobUrl = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
    }, false);
  if (image) {
       reader.readAsDataURL(image);
    }
  }

  fileChange(event:any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('idUsuario',this.usuario);
        this.perfilService.uploadFoto(formData)
        .subscribe(result => {
          this.getPhoto();
        });

    }
}
}
