import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transferencia } from 'src/app/services/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-extrato-detalhe',
  templateUrl: './extrato-detalhe.component.html',
  styleUrls: ['./extrato-detalhe.component.scss']
})
export class ExtratoDetalheComponent implements OnInit {
  transferencia: Transferencia;

  constructor(
    private service: TransferenciaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;

    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencia = transferencias.find(transferencia => transferencia.id == id);
    });
  }

}
