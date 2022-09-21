import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Transferencia } from 'src/app/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;
  descricao: string = '';
  @Input() tipo: string = '';

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log(this.tipo, 'solicitado');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      tipo: this.tipo,
      descricao: this.descricao
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
    this.descricao= '';
  }


  private validarTransferencia(valorEmitido: Transferencia) {
    return valorEmitido.valor != null
      && valorEmitido.valor > 0
      && valorEmitido.destino.toString().length > 4;
  }

}
