import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private appRoutes: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(){
      this.inscricao = this.appRoutes.params.subscribe(
        (params: any) => {
          let id =params['id'];

          this.aluno = this.alunosService.getAluno(id);
        }
      );
    }

    editarContato(){
      this.router.navigate(['/alunos', this.aluno.id, 'editar']);
    }


  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
