import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
      { path: 'cursos', component: CursosComponent},
      { path: 'curso/:id', component: CursoDetalheComponent},
      { path: 'login', component: LoginComponent},
      { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
      { path: '', component: HomeComponent }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutingModule);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
