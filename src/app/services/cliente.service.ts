import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private url = 'http://localhost:3000/clientes';

  constructor(private httpClient : HttpClient ) {
    this.clientes = [];
  }

  getAll(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  }
  getCliente(): Observable<Cliente>{
     return this.httpClient.get<Cliente>(this.url + '/1')
  }


}
