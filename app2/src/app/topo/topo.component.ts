import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import { Observable, Subject, of } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { switchMap, debounceTime, distinctUntilChanged, } from 'rxjs/operators';


@Component({
  selector: 'xyz-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  title = 'Topo';

  public ofertas: Observable<Oferta[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) =>  {

          console.log('Requisição http para a api');

          if (termo.trim() === '') {
            return of<Oferta[]>([]);
          }

          return this.ofertasService.pesquisaOferta(termo);
        })
    );

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {

    // ** Para aprendizado **
    // this.ofertas = this.ofertasService.pesquisaOferta(termoDaBusca);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log(erro),
    //   (() => console.log('Fluxo de eventos completo')));

    console.log("KeyUp", termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
