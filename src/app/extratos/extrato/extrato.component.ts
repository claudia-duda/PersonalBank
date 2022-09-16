import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transferencia } from '../../services/models/transferencia.model';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
  filtro: string = '';
  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}