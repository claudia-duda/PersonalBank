import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private listaTransferencia: Cliente[];
  private url = 'http://localhost:3000/clientes';

  constructor(private httpClient : HttpClient ) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  getAll(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  }
  getCliente(): Observable<Cliente>{
     return this.httpClient.get<Cliente>(this.url + '/1')
  }


}
