import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/ofertas.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'xyz-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas : Array<Oferta>;

  constructor(private ofertasService : OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorCategoria("diversao")
                       .then((ofertas: Array<Oferta>) => this.ofertas = ofertas); 
  }

}
