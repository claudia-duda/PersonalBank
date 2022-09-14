import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-novo-deposito',
  templateUrl: './novo-deposito.component.html',
  styleUrls: ['./novo-deposito.component.scss']
})

export class NovoDepositoComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('Solicitada novo Depósito');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      tipo: 'Depósito'
    };

    if (this.validarTransferencia(valorEmitir)) {
      this.service.adicionar(valorEmitir).subscribe({
        next: (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        error: (msg) => console.error(msg)
      });
    } else {
      alert('dados invalidos');
    }
  }

  private limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private validarTransferencia(valorEmitido: Transferencia) {
    return valorEmitido.valor != null
      && valorEmitido.valor > 0
      && valorEmitido.destino.toString().length > 4;
  }

}
