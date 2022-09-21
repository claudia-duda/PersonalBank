import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

export class ClienteComponent implements OnInit, OnChanges {

  @Input() saldo: number= 0;
  nome: string = '';
  conta: string ='';

  constructor(private service: ClienteService){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.validarDados();
  }

  validarDados(){

    const cliente =this.service.getCliente()
    .subscribe({
      next(cliente) {
        console.log(cliente.saldo)
        this.saldo = cliente.saldo,
        this.nome = cliente.nome,
        this.conta = cliente.NumeroConta;
      },error: (msg) => console.error(msg)
    });

  }
  sacar(valor: number) :void{
    if(this.saldo >= valor){
      this.saldo-=valor;
    }else {
      alert('Saldo indisponível');
    }
  }

  depositar(valor: number): void{
    this.saldo+= valor;
  }


}
