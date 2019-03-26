import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup;
  public idPedidoSalvo: number;

  constructor(private ordemCompraService: OrdemCompraService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      endereco: [null, [Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(50)]],
      formaPagamento: [null, [Validators.required]],
      numero: [null, [Validators.required]]
    });

    console.log(this.formulario);
  }

  public confirmarCompra(): void {

    if (!this.formulario.valid) {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {
        let pedido: Pedido = new Pedido(
            this.formulario.value.numero,
            this.formulario.value.endereco,
            this.formulario.value.complemento,
            this.formulario.value.formaPagamento)

        this.ordemCompraService.efetivarCompra(pedido)
                               .subscribe((resposta: number) => {
                                   this.idPedidoSalvo = resposta;
                               });
    }
  }
}
