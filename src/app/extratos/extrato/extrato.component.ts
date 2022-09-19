import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Transferencia, TransferenciaResolved } from './../../services/models/transferencia.model';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];
  filtro: string = '';
  error: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    const resolveData: TransferenciaResolved = this.activatedRoute.snapshot.data['extratos'];
    this.error = resolveData.error;
    this.transferencias = this.activatedRoute.snapshot.data['extratos'];


  }
}

