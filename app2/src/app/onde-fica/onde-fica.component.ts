import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'xyz-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  private ondeFica: string;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {

      this.route.parent.params.subscribe((params: Params) => {
        this.ofertasService
            .getOndeFicaPorID(params.id )
            .then((resposta: any) => this.ondeFica = resposta);
      });
  }

}
