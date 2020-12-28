import { Injectable } from "@angular/core";
import {
   ActivatedRouteSnapshot,
   CanActivateChild,
   RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs";



@Injectable()
export class CursoGuard implements CanActivateChild {

  canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

     console.log('guarda rota filha');

     return true;
  }

}
