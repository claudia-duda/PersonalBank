import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Transferencia, TransferenciaResolved } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[];
  filtro: string = '';
  error: any;
  hasMore: boolean = true;
  currentPage: number = 1;
  constructor(private activatedRoute: ActivatedRoute, private transferenciaService: TransferenciaService) {}

  ngOnInit(): void{
    const resolveData: TransferenciaResolved = this.activatedRoute.snapshot.data['extratos'];
    this.error = resolveData.error;
    this.transferencias = this.activatedRoute.snapshot.data['extratos'];


  }

  load(){
    this.transferenciaService.todasPaginated(++this.currentPage).subscribe(transferencias =>{
      this.transferencias = this.transferencias.concat(...transferencias);
      if(!transferencias.length) this.hasMore = false;

    })
  }
}

