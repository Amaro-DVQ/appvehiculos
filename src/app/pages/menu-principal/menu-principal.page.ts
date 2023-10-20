import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController ,MenuController } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  menuArray: Menu[] = [];
  loading: boolean = false;
  login: boolean = false;

  constructor(private router: Router, private menuCtrl:MenuController,
    private animationCtrl:AnimationController,
    private auth:UserService,
    private helper: HelperService
    ) { this.auth.stateUser().subscribe(res => {
      if(res){
        this.login = true;

      }else{
        this.login = false;
      }

     })}

  ngOnInit() {
    this.cargarMenu();
  }

  cargarMenu() {
    var par = 123;
    this.menuArray.push(
      {
        id: 1,
        titulo: "Ofrecer Auto",
        url: "/" + par + "/ofrecer-auto",
        icono: "",
        disabled: false,
      },
      {
        id: 2,
        titulo: "Solicitar Auto",
        url: "/" + par + "/solicitar-auto",
        icono: "",
        disabled: false,
      }
    );
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  showDisabledMessage() {


  }

  getStyleForCard(menuItem: Menu): any {
    if (menuItem.titulo === 'Ofrecer Auto') {
      return {
        'flex': '1',
        'border': 'solid',
        'border-radius': '30px',
        'background': '#FBBB34',
        'color': 'white',
        'font-size': '35px',
        'font-weight': 'bold'
      };
    } else {

      return {
        'flex': '1',
        'border': 'solid',
        'border-radius': '30px',
        'font-size': '35px',
        'color': 'white',
        'font-weight': 'bold'
      };
    }
  }

  cerrarMenu(){
    this.menuCtrl.close();
  }

  logOut(){
    this.helper.showConfirm("¿Desea cerrar sesión?","Cerrar sesión","Cancelar").then(res =>{
      if(res){
        this.auth.logout();
        this.router.navigateByUrl("/login");
        this.helper.presentToast("Sesión cerrada correctamente");
      }
    })
  }

  perfil(){
    this.router.navigateByUrl('perfil');
  }


}
