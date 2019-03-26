import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xyz-sucesso-compra',
  templateUrl: './sucesso-compra.component.html',
  styleUrls: ['./sucesso-compra.component.css']
})
export class SucessoCompraComponent implements OnInit {

  constructor() { }

  @Input() public idPedidoSalvo: number;

  ngOnInit() {

   
  }

}
