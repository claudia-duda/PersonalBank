import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

      this.service.findById(id).subscribe({
        next: (transferencia: Transferencia) => {

          this.transferencia = transferencia;
        },
        error: (error) => {
          if (error.status === 404) {
            this.router.navigateByUrl('**');
          }
        }
      });
  }

}
