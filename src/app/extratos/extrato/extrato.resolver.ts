import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Transferencia } from 'src/app/services/models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';

@Injectable({ providedIn: 'root'})
export class ExtratoResolver implements Resolve<Observable<Transferencia[]>>{

  constructor(private service : TransferenciaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transferencia[]> {

    return this.service.todas();
  }
}
