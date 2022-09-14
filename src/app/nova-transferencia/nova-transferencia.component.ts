import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

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
      alert('dados invalidos')
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
