import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Transferencia } from './../../services/models/transferencia.model';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.transferencias = this.activatedRoute.snapshot.data['extratos'];

  }
}

