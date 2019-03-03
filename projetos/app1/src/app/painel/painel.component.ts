import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { frases as frasesMock } from '../shared/frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases : Array<Frase>;
  public fraseAtual : Frase;
  public rodada : number = 0;
  public resposta : string;
  public percentual : number = 0;
  public tentativas : number = 3;
  
  constructor() { 
      this.frases = frasesMock;
  }

  ngOnInit() {
    this.fraseAtual = this.frases[0];
    this.resposta = "";
  }

  public recuperarResposta(e : Event) : void
  {
     this.resposta = ((<HTMLTextAreaElement>e.target).value);
     console.log(this.resposta);
  }

  public verificarResposta(e : Event) : void
  {
    if(this.resposta == this.fraseAtual.fraseBR){
      
      this.rodada++;
      this.percentual = ( (this.rodada*100) / this.frases.length );

      if(this.rodada != this.frases.length){
        console.log("percentual: ", this.percentual);
        this.fraseAtual = this.frases[this.rodada];
        this.resposta = "";
        console.log("Acertou!");
      }
      else{
        console.log("Uau, você é realmente foda em inglês.");
      }

    }
    else{
     
      this.tentativas--;
      if(this.tentativas == 0){
        console.log("Acabou suas tentativas, você não conseguiu. You lose!");
      }

      console.log("tentativas: ", this.tentativas)
      console.log("Errou!");
    }
  }
  
}
