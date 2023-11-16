import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'


const redireccionarlogin = () => redirectUnauthorizedTo(['/login']);


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-principal',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: ':num/solicitar-auto',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/solicitar-auto/solicitar-auto.module').then( m => m.SolicitarAutoPageModule)
  },
  {
    path: ':num/ofrecer-auto',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/ofrecer-auto/ofrecer-auto.module').then( m => m.OfrecerAutoPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'confirmar-viaje',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/confirmar-viaje/confirmar-viaje.module').then( m => m.ConfirmarViajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
