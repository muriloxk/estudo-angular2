import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'xyz-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
})
export class TopoComponent implements OnInit{
  title = 'Topo';

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

  }

  public pesquisa(termoDaBusca: string): void {

    this.ofertasService.pesquisaOferta(termoDaBusca);
  
  }

  
}
