import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'; 
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'xyz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  public ofertas : Array<Oferta>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertasService.getOfertas2()
    //                    .then( 
    //                       (ofertas: Array<Oferta>)  => this.ofertas = ofertas, 
    //                       (param: any) => console.log(param),
    //                    );       


    this.ofertasService.getOfertas2()
                        .then((ofertas: Array<Oferta>)  =>{
                          console.log('A função resolve() foi executada depois de 3 segundos.')
                          this.ofertas = ofertas
                        } )
                        .catch((param: any) => console.log(param));       
  }

}
