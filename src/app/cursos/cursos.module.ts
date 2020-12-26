import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';


// import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule

    // RouterModule <-- Na versão do Angular 10 não precisa mais ser importado nos componentes.
  ],
  exports: [],
  providers: [
    CursosService
  ],
})
export class CursosModule {}

