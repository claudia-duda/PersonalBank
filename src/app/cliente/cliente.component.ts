import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

export class ClienteComponent implements OnInit{

  saldo: number= 0;
  nome: string = '';
  conta: string ='';

  constructor(private service: ClienteService){}

  ngOnInit(): void {
    this.validarDados();
  }

  validarDados(){
    const cliente =this.service.getCliente().subscribe({
      next(cliente) {
        this.saldo = cliente.saldo,
        this.nome = cliente.nome,
        this.conta = cliente.NumeroConta;
      },error: (msg) => console.error(msg)
    });
  }
  sacar() :void{

  }

  depositar(): void{

  }


}
