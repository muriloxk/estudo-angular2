import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,  OnChanges{

  public coracoes : Array<Coracao>;
  @Input() public tentativas : number;

  constructor() {
    this.coracoes = [new Coracao(), new Coracao(), new Coracao()];
  }

  ngOnInit() {
    //teste
  }

  ngOnChanges(){
    if(this.coracoes.length != this.tentativas && this.tentativas >= 0)
    {
      this.coracoes[(this.coracoes.length - this.tentativas) - 1].isCheio = false;
    } 
  }

}
