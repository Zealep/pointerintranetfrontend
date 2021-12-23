import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus:Menu[] = [];

  constructor(private loginService:AuthenticationService,
  private authentocationService: AuthenticationService,
  private router: Router,
  private menuService: MenuService) {

}

ngOnInit() {
  this.getMenus();
}

getMenus(){
  this.menuService.getMenus().subscribe(x=>{
    this.menus = x;
  })
}

cerrarSesion(){
  this.authentocationService.logOut();
  this.router.navigate(['login']);
}



}
