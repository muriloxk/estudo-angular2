import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/ofertas.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  private route: ActivatedRoute;
  private oferta: Oferta;

  constructor(route: ActivatedRoute, private ofertasService: OfertasService) {
    this.route = route;
  }

  ngOnInit() {
    this.ofertasService.getOfertaPorID(this.route.snapshot.params.id)
                       .then((oferta: Oferta) => 
                       {
                         this.oferta = oferta;
                       });
  }

}
