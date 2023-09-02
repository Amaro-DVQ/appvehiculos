import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  atrasInicio() {
    this.router.navigateByUrl('/home')
  }
}

