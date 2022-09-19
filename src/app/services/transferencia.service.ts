import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Transferencia } from './models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient : HttpClient ) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  todasPaginated(page: number){
    const params = new HttpParams()
      .append('_page', page.toString());
      return this.httpClient.get<Transferencia[]>(this.url, {params});
  }

  findById(id: number): Observable<Transferencia>{
    return this.httpClient.get<Transferencia>(`${this.url}/${id}`);
  }

  adicionar(transferencia: Transferencia) : Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
