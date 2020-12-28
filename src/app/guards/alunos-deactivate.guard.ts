import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
          component: IFormCanDeactivate,
          Route: ActivatedRouteSnapshot,
          State: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

       console.log('guarda de desativação');

      // return component.podeMudarRota();
      // return component.podeDesativar();
       return component.podeDesativar? component.podeDesativar():true;
  }
}
