import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
      private appRoutes: ActivatedRoute,
      private router: Router,
      private cursosService: CursosService
    ) {
    // this.id = this.route.snapshot.params['id']
    // console.log(this.route);
   }

  ngOnInit() {
    this.inscricao = this.appRoutes.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
