import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirLogin: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public exibirPainelLogin(): void {
    this.exibirLogin.emit('login');
  }

}
