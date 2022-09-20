import { TransferenciaResolved } from '../../models/transferencia.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';

@Injectable({ providedIn: 'root'})
export class ExtratoResolver implements Resolve<TransferenciaResolved[]>{

  constructor(private service : TransferenciaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.service.todasPaginated(1).pipe(
      catchError(error => {
        const message = `Retrieval error backend: ${error}`;
        console.error(message);
        return of(error);
      })
    )
  }
}
