import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'xyz-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas : Array<Oferta>;

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertaPorCategoria('restaurante')
                      .then((ofertas : Array<Oferta>) => this.ofertas = ofertas);
  }

}
