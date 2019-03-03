"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas, velocidade) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = velocidade;
    }
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
