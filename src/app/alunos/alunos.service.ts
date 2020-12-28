import { Injectable } from '@angular/core';


@Injectable()
export class AlunosService {

   alunos: any [] = [
    {id: 1, nome: 'Priscila', email: 'aluno01@email.com'},
    {id: 2, nome: 'Beatriz', email: 'aluno02@email.com'},
    {id: 3, nome: 'Dayne', email: 'aluno03@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
  constructor( ){ }
}
